import { Component } from "@angular/core";
import { Course } from "../../interfaces/course.interface";

@Component({
    selector: 'app-course-list-test',
    template: `<app-course-list *ngIf="courses" (deleteCourse)="onDeleteCourse($event)"></app-course-list>`
})
export class CourseListTestHostComponent {
    courses: Course[] | undefined
    onDeleteCourse(courseId: string) : string{
        return courseId
    }
}