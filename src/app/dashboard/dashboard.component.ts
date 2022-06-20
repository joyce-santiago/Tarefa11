import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(private studentService: StudentService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getTeachers();
  }
  
  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students.slice(0, 5));
  }
  
  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers.slice(0, 5));
  }
}

