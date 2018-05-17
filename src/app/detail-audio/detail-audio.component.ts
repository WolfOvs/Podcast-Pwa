import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-audio',
  templateUrl: './detail-audio.component.html',
  styleUrls: ['./detail-audio.component.scss']
})
export class DetailAudioComponent implements OnInit {
  detailAudio: any;
  constructor(public dataService: DataService) {
    this.detailAudio = this.dataService.serviceData;
  }

  ngOnInit() {
  }

}
