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
  originalCoursesList: Course[] = [];
  filteredCourses: Course[] = []; 
  constructor(private filterPipe: FilterCoursesPipe) {}

  ngOnInit(){
    this.originalCoursesList = [...this.coursesList]
    this.filteredCourses = [...this.coursesList]
  }

  onSearch(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.inputValue || this.inputValue.trim() === '') {
      this.filteredCourses = [...this.originalCoursesList];
      this.inputValue = ''
    } else {
      this.filteredCourses = this.filterPipe.transform([...this.originalCoursesList], this.inputValue);
    }
    this.courseFilter.emit(this.filteredCourses);
  }

  onInputChange(event: Event){
  const inputElement = event.target as HTMLInputElement
  this.inputValue = inputElement.value
  this.onSearch()
  }
}