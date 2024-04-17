import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { mocks } from '../components/course-list/courses-mock';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Record<string, Course> = {}
  constructor() {
    this.courses = mocks.reduce((acc, course) => {
      acc[course.id] = course
      return acc
    }, {} as Record<string, Course>)
  }

  getAllCourses() { }

  getCourseById(id: string): Course | undefined {
    return undefined
  }

  addToCourses(course: Course) {}

  updateCourseInfo(courseId: string, info:Partial<Course>){}

  deleteCourseById(id:string) {
    
  }
}
