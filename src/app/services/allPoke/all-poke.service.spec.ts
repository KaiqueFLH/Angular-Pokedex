import { TestBed } from '@angular/core/testing';

import { AllPokeService } from './all-poke.service';

describe('AllPokeService', () => {
  let service: AllPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
