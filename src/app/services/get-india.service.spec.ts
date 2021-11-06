import { TestBed } from '@angular/core/testing';

import { GetIndiaService } from './get-india.service';

describe('GetIndiaService', () => {
  let service: GetIndiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIndiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
