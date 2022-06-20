import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from './teacher';
import { TEACHERS } from './lista-teachers';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class TeacherService {
  constructor(private messageService: MessageService) { }

  getTeachers(): Observable<Teacher[]> {
    const teachers = of(TEACHERS);
    this.messageService.add('TeacherService: fetched teachers');
    return teachers;
  }

  getTeacher(id: number): Observable<Teacher> {
    const teacher = TEACHERS.find(t => t.id === id) !;
    this.messageService.add('TeacherService: fetched teachers id=${id}');
    return of(teacher);
  }
}
