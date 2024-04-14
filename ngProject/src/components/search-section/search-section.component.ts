import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { FilterCoursesPipe } from '../../pipes/filterCourses.pipe';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  inputValue: string = '';
  @Input() coursesList: Course[] = []
  @Output() courseFilter = new EventEmitter<Course[]>()
  constructor(private filterPipe: FilterCoursesPipe) {}

  onSearch() {
    if (!this.inputValue || this.inputValue.trim() === '') {
      console.log('Emitting original courses list');
      console.log(this.coursesList)
      this.courseFilter.emit(this.coursesList);
      console.log(this.coursesList)
    } else {
      console.log('Filtering courses by:', this.inputValue);
      const filteredCourses: Course[] = this.filterPipe.transform(Array.from(this.coursesList), this.inputValue);
      console.log('Filtered courses:', filteredCourses);
      console.log('Initial courses:', this.coursesList);
      this.courseFilter.emit(filteredCourses);
    }
  }
}
