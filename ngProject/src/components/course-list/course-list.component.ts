import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, OnDestroy, Inject } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { EMPTY, Subscription, filter, of, switchMap } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TuiPromptData, TUI_PROMPT } from '@taiga-ui/kit';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Course[] = []
  private courseId: string = ''
  @Output() deleteCourse = new EventEmitter<string>()
  private coursesSubscription!: Subscription;

  constructor(private readonly service: CoursesService, private readonly authService: AuthService, @Inject(TuiDialogService) private readonly dialogs: TuiDialogService, @Inject(TuiAlertService) private readonly alerts: TuiAlertService) { }

  ngOnInit(): void {
    this.authService.isAuthorized()
    this.loadAllCourses()
    this.coursesSubscription = this.service.courses$.subscribe((coursesSent) => {
      this.courses = coursesSent
    })
  }

  //Отедльный метод, просто для получения
  loadAllCourses() {
    this.courses = this.service.getAllCourses()
  }

  sortCourses(): void {
    this.service.sortCourses()
  }

  onDeleteCourse() {
    this.service.deleteCourseById(this.courseId)
  }
  setCourseId(courseId: string) {
    this.courseId = courseId
  }

  onAddMore() {
    return 'Btn Clicked';
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe()
  }

  onDeleteClick(courseId:string): void {
    this.setCourseId(courseId)
    this.showDialogAndAlert()
  }

  showDialogAndAlert(){
    const data: TuiPromptData = {
      yes: 'Delete!',
      no: 'Cancel',
    };

    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Do you really want to delete this course?',
        size: 'l',
        data,
      })
      .pipe(
        switchMap((response) => {
          if (response) {
            this.onDeleteCourse()
            this.alerts.open('', {
              label: 'Course deleted successfully',
              status: 'success',
              autoClose: true,
            })
            return of(response)
          }
          else {
            return EMPTY
          }
        }))
      .subscribe();
  }
}
