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

  onSearch(event?: Event) {
    if(event){
      event.preventDefault()
    }
    if (!this.inputValue || this.inputValue.trim() === '') {
      this.courseFilter.emit(this.coursesList);
    } else {
      const filteredCourses: Course[] = this.filterPipe.transform(Array.from(this.coursesList), this.inputValue);
      this.courseFilter.emit(filteredCourses);
    }
  }
}
