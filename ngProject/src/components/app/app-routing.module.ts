import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AppComponent } from './app.component';
import { CourseListComponent } from '../course-list/course-list.component';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'', component:CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
