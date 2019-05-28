import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Task } from './core/models/task.model';
import { TasksService } from './core/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTask: Task = { name: null, complete: false };

  allTasks$: Observable<Task[]>;

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.allTasks$ = this.getTasks$();
  }

  getTasks$(): Observable<Task[]> {
    return this.tasksService.getTasks$();
  }

  createTask(): void {
    this.allTasks$ = this.tasksService.createTask$(this.newTask).pipe(
      tap(() => this.newTask.name = null),
      switchMap(() => this.getTasks$()),
    );
  }

  toggleTask(task: Task): void {
    this.allTasks$ = this.tasksService.toggleTask$(task).pipe(
      switchMap(() => this.getTasks$()),
    );
  }

  deleteTask(id: number): void {
    this.allTasks$ = this.tasksService.deleteTask$(id).pipe(
      switchMap(() => this.getTasks$()),
    );
  }

  onFormChange($event: { target: { value: string }}) {
    this.newTask.name = $event.target.value;
  }
}
