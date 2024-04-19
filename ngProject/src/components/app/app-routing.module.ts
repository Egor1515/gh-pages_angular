import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path:'login', component:LoginPageComponent, },
  {path:'courses', component:CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
