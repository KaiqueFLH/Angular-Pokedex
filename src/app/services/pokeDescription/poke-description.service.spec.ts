import { TestBed } from '@angular/core/testing';

import { PokeDescriptionService } from './poke-description.service';

describe('PokeDescriptionService', () => {
  let service: PokeDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
