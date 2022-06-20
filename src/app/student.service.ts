import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './student';
import { STUDENTS } from './lista-students';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class StudentService {
  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('StudentService: fetched students');
    return students;
  }

  getStudent(id: number): Observable<Student> {
    const student = STUDENTS.find(s => s.id ===id) !;
    this.messageService.add('StudentService: fetched students id=${id}');
    return of(student);
  }
}
