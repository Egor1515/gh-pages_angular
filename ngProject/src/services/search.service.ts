import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CoursesService } from './courses.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    filteredCourses$: Observable<Course[]>
    constructor(private readonly courseService: CoursesService) {
        this.filteredCourses$ = this.courseService.courses$.pipe(
            map(courses => {
                return courses.slice()
            })
        )
    }

    filterCourses(inputValue: string) {
        this.courseService.filterCourses(inputValue)
    }
}
