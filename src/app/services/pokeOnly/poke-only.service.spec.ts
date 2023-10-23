import { TestBed } from '@angular/core/testing';

import { PokeOnlyService } from './poke-only.service';

describe('PokeOnlyService', () => {
  let service: PokeOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
