import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../interfaces/course.interface";
@Pipe({
    name: "filterCourses"
})

export class FilterCoursesPipe implements PipeTransform {
    transform(courses: Course[], searchInput: string) {
        if (!courses || !searchInput || searchInput.trim() === '') {
            return courses
        }
        searchInput = searchInput.toLowerCase().trim()

        return courses.filter(course => {
            return course.name.toLowerCase().includes(searchInput)
        })
    }
}