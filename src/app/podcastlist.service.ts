import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastlistService {

  constructor(private http: HttpClient) {

  }

  getPodcastList() {
    return this.http.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  }
}
