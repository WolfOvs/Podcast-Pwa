import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailpodcastService {

  constructor(private http: HttpClient) {

  }

  getPodcastDetail(id) {
    return this.http.get(`https://itunes.apple.com/lookup?id=${id}`);
  }
}
