import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent implements OnInit, OnDestroy {

  courses!: Course[]
  @Output() deleteCourse = new EventEmitter<string>()
  private coursesSubscription!: Subscription;
  
  constructor(private service: CoursesService, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {

    this.loadAllCourses()
    this.sortCourses()
    this.coursesSubscription = this.service.coursesSubject.subscribe((coursesSent)=> {
      this.courses = coursesSent
    })
  }

  //Отедльный метод, просто для получения и чистоты кода
  loadAllCourses() {
    this.courses = this.service.getAllCourses()
  }

  sortCourses(): void {
    this.courses.sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime()
      const dateB = new Date(b.creationDate).getTime()
      return dateB - dateA
    })
  }

  onDeleteCourse(courseId: string) {
   this.deleteCourse.emit(courseId)
  }

  onAddMore() {
    return 'Btn Clicked';
  }

  filterCourses(filteredCourses: Course[]) {
    return this.courses = [...filteredCourses]
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe()
  }
}
