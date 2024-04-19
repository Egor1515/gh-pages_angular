import { Component } from '@angular/core';
import { mocks } from '../course-list/courses-mock';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'ngProject';
  courses = mocks
  
  constructor(private service: CoursesService, private router: Router){}

  onDeleteCourse(courseId: string) {
    const userConfirm = confirm('Do you really want to delete this course?')
    if(userConfirm){
      this.service.deleteCourseById(courseId)
    }
  }

  isOnLoginPage(){
    return !this.router.url.includes('/login')
  }
}
