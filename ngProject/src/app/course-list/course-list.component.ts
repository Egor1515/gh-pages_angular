import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { mocks } from './courses-mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent implements OnInit {
  @Input() courses: any[] = []
  @ Output() courseDeleted = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
    this.courses = mocks
    this.sortCourses()
  }

  sortCourses(): void {
    this.courses.sort((a, b) => {
      const dateA = new Date(a).getTime()
      const dateB = new Date(b).getTime()
      return dateA - dateB
    })
  }

  onDeleteCourse(courseId: number) {
    this.courseDeleted.emit(courseId)
  }
}
