import { TestBed, inject } from '@angular/core/testing';

import { DetailPodcastService } from './detail-podcast.service';

describe('DetailPodcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailPodcastService]
    });
  });

  it('should be created', inject([DetailPodcastService], (service: DetailPodcastService) => {
    expect(service).toBeTruthy();
  }));
});
