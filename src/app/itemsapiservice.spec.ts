import { TestBed } from '@angular/core/testing';

import { Itemsapiservice } from './itemsapiservice';

describe('Itemsapiservice', () => {
  let service: Itemsapiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Itemsapiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
