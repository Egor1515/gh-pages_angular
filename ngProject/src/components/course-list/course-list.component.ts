import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[] = []
  @Output() deleteCourse = new EventEmitter<string>()

  ngOnInit(): void {
    this.sortCourses()
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

  filterCourses(filteredCourses:Course[]){
    return this.courses = [...filteredCourses]
  }
}
