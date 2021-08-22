import { TestBed } from '@angular/core/testing';

import { BlockElementGenerationService } from './block-element-generation.service';

describe('BlockElementGenerationService', () => {
  let service: BlockElementGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockElementGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
