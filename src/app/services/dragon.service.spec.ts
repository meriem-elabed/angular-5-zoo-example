import { TestBed, inject } from '@angular/core/testing';

import { DragonService } from './dragon.service';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonService]
    });
  });

  it('should be created', inject([DragonService], (service: DragonService) => {
    expect(service).toBeTruthy();
  }));
});
