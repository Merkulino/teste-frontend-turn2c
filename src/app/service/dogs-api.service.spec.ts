import { TestBed } from '@angular/core/testing';

import { DogsAPIService } from './dogs-api.service';

describe('DogsAPIService', () => {
  let service: DogsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
