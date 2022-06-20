import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TeacherDetailComponent},
  { path: 'student-detail/:id', component: StudentDetailComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
