import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailpodcastService } from '../detail-podcast.service';
import { Parser } from 'xml2js';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  podCastDetail: any;
  podCastDetailObj: object;
  feedUrl: string;
  audioList: any;
  id: string;
  constructor(public dataService: DataService, private router: Router, private getPodcastDetailService: DetailpodcastService, private httpClient: HttpClient, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    this.podCastDetailObj = JSON.parse(localStorage.getItem('podCastDetailObj'));
    this.audioList = JSON.parse(localStorage.getItem('audioList'));
    if (!this.podCastDetailObj) {
      console.log('NO');
      this.getPodCastDetail(this.id);
    }
  }

  ngOnInit() {
  }

  getPodCastDetail(id) {
    this.getPodcastDetailService.getPodcastDetail(id)
      .subscribe(
        (data) => {
          this.podCastDetail = data;
          this.podCastDetailObj = this.podCastDetail.results[0];
          localStorage.setItem('podCastDetailObj', JSON.stringify(this.podCastDetailObj));
          this.getCORS();
        }
      );
  }
  getCORS = () => {
      this.httpClient
      .get(`https://cors-anywhere.herokuapp.com/${this.podCastDetailObj['feedUrl']}`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
          responseType: 'text'
      }).subscribe(data => {
        const XML = data;
        const parseString = require('xml2js').parseString;
        const audioList = {};
        parseString(XML, (err, result) => {
          if (result) {
            this.audioList = result['rss']['channel'][0];
            localStorage.setItem('audioList', JSON.stringify(this.audioList));
          }
        });
      });
  }

  goToAudioPage = (item, episodeId) => {
    this.router.navigate(['podcast', this.id, 'episode', episodeId]);
    if (this.podCastDetail) {
      this.podCastDetail.results.push(item);
    }
    this.dataService.serviceData = this.podCastDetail;
  }

  truncateLabel(string, n) {
    return (string.length > n) ? `${string.substr(0, n - 1)}${'...'}` : string;
  }
}
