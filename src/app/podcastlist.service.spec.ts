import { TestBed, inject } from '@angular/core/testing';

import { PodcastlistService } from './podcastlist.service';

describe('PodcastlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcastlistService]
    });
  });

  it('should be created', inject([PodcastlistService], (service: PodcastlistService) => {
    expect(service).toBeTruthy();
  }));
});
