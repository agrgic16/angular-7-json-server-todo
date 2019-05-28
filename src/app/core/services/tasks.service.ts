import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from '../models/task.model';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class TasksService {
  private readonly apiPath = 'http://localhost:3000/tasks';

  private readonly contentTypeHeader = { 'Content-Type': 'application/json' };

  constructor(public http: HttpClient) {}

  getTasks$(): Observable<Task[]> {
    const uri = this.apiPath;

    return this.http.get<Task[]>(uri);
  }

  createTask$(task: Task): Observable<any> {
    const uri = this.apiPath;
    const headers = { ...this.contentTypeHeader };

    return this.http.post(uri, task, {headers});
  }

  toggleTask$(task: Task): Observable<any> {
    const uri = `${this.apiPath}/${task.id}`;
    const headers = { ...this.contentTypeHeader };
    const body = { complete: !task.complete };

    return this.http.patch(uri, body, {headers});
  }

  deleteTask$(id: number): Observable<any> {
    const uri = `${this.apiPath}/${id}`;

    return this.http.delete(uri);
  }
}
