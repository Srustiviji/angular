import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
const routes: Routes = [
  {
    path: 'add',
    component: 'AddStudentComponent'
  }
  {
    path: 'edit',
    component: 'EditStudentComponent'
  }
  {
    path: 'login',
    component: 'LoginStudentComponent'
  }
  {
    path: 'register',
    component: 'RegisterStudentComponent'
  }
  {
    path: 'list',
    component: 'ListStudentComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
