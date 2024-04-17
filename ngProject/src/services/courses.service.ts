import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { mocks } from '../components/course-list/courses-mock';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Record<string, Course> = {}


  constructor() {
    this.initCourses()
  }


  private initCourses() {
    this.courses = mocks.reduce((acc, course) => {
      acc[course.id] = course
      return acc
    }, {} as Record<string, Course>)

    // this.updateCoursesSubject()
  }

  // private updateCoursesSubject() {
  //   this.coursesSubject.next(Object.values(this.courses))
  //   // this.updateCoursesSubject()
  // }

  getAllCourses():Course[] {

    return Object.values(this.courses)
  }

  getCourseById(id: string): Course | undefined {
    return this.courses[id]
  }

  addToCourses(newCourse: Course) {
    this.courses[newCourse.id] = newCourse
  }

  updateCourseData(id: string, newData: Partial<Course>) {
    if (!this.courses[id]) throw new Error(`Курса с id ${id} нет`)

    this.courses[id] = {
      ...this.courses[id],
      ...newData
    }
  }

  deleteCourseById(id: string) {
    console.log(this.courses)
    if (!this.courses[id]) throw new Error(`Курса с id ${id} нет`)

    if (this.courses[id]) {
      delete this.courses[id]
    }
    // this.updateCoursesSubject()
  }
}