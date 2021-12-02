import { TestBed } from '@angular/core/testing';

import { YodaService } from './yoda.service';

describe('YodaService', () => {
  let service: YodaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YodaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
