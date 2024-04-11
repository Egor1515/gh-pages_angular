import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../intefaces/course.interface';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[] = []
  @Output() courseDeleted = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.sortCourses()
  }

  sortCourses(): void {
    this.courses.sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime()
      const dateB = new Date(b.creationDate).getTime()
      return dateA - dateB
    })
  }

  onDeleteCourse(courseId: string) {
    this.courseDeleted.emit(courseId)
  }
}
