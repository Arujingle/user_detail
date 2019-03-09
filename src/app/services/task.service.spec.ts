import { TestBed } from '@angular/core/testing';

import { DotaskService } from './task.service';

describe('DotaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DotaskService = TestBed.get(DotaskService);
    expect(service).toBeTruthy();
  });
});
