import { TestBed } from '@angular/core/testing';

import { ReviewKeywordService } from './review-keyword.service';

describe('ReviewKeywordService', () => {
  let service: ReviewKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
