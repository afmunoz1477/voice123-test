import { TestBed } from '@angular/core/testing';

import { Voice.SearchService } from './voice.search.service';

describe('Voice.SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Voice.SearchService = TestBed.get(Voice.SearchService);
    expect(service).toBeTruthy();
  });
});
