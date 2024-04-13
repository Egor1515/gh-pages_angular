import { Component } from '@angular/core';
import { mocks } from './course-list/courses-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'ngProject';
  courses = mocks
  onAddMore() {
    return 'Btn Clicked';
  }

  onCourseDeleted(courseId: string) {
    return courseId;
  }
}
