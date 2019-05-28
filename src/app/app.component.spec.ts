import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TasksService } from './core/services';

describe('AppComponent', () => {
  let tasksServiceSpy: jasmine.SpyObj<TasksService>;
  beforeEach(async(() => {
    tasksServiceSpy = jasmine.createSpyObj<TasksService>(
      'TasksService',
      ['getTasks$', 'createTask$', 'toggleTask$', 'deleteTask$'],
    );
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TasksService, useValue: tasksServiceSpy},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
