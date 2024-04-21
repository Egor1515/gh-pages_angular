import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.less'],
})
export class SearchSectionComponent {
  readonly inputValue: string = '';
  @Input() coursesList: Course[] = [];
  constructor(private readonly searchService: SearchService) {}

  onSearch(event?: Event) {
    if (event) {
      event.preventDefault()
    }
    this.searchService.filterCourses(this.inputValue)
  }
}
