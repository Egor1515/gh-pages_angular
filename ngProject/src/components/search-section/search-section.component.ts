import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { SearchService } from '../../services/search.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.less'],
})
export class SearchSectionComponent {
  inputValue: string = '';
  @Input() coursesList: Course[] = [];
  @Output() courseFilter = new EventEmitter<Course[]>();
  constructor(private readonly searchService: SearchService) {

  }

  onSearch(event?: Event) {
    if (event) {
      event.preventDefault()
    }
    this.searchService.filterCourses(this.inputValue)
  }
}
