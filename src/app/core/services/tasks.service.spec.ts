import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TasksService,
    ],
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: TasksService = TestBed.get(TasksService);
    expect(service).toBeTruthy();
  });
});
