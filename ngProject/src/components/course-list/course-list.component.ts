import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, OnDestroy, Inject } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';
import { TuiAlertService, TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiPromptData, TUI_PROMPT } from '@taiga-ui/kit';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Course[] = []
  courseId: string = ''
  @Output() deleteCourse = new EventEmitter<string>()
  private coursesSubscription!: Subscription;

  constructor(private service: CoursesService, private authGuardService: AuthGuardService, @Inject(TuiDialogService) private readonly dialogs: TuiDialogService, @Inject(TuiAlertService) private readonly alerts: TuiAlertService) { }

  showDialog(content: PolymorpheusContent<TuiDialogContext>, courseId: string): void {
    this.setCourseId(courseId)
    this.dialogs.open(content).subscribe();

  }
  deleteById(): void {
    this.onDeleteCourse()
  }
  ngOnInit(): void {
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

  filterCourses(filteredCourses: Course[]) {
    this.service.filterCourses('')
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe()
  }

    onClick(): void {
    const data: TuiPromptData = {
      content:
        'This is <code>PolymorpheusContent</code> so it can be a template too!',
      yes: 'That is great!',
      no: 'Who cares?',
    };

    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Do you like Taiga UI?',
        size: 's',
        data,
      })
      .pipe(
        switchMap((response) =>
          this.alerts.open('', {
            label: 'Hello',
            status: 'success',
            autoClose: true,
          })
        )
      )
      .subscribe({
        next: () => {
          console.log('Alert opened successfully');
        },
        error: (error) => {
          console.error('Error opening alert:', error);
        },
      });
  } 
}
