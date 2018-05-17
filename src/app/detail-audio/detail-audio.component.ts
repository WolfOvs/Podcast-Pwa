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
    console.log('this.dataService.serviceData', this.dataService.serviceData);
    if (this.dataService.serviceData) {
      this.detailAudio = this.dataService.serviceData;
      localStorage.setItem('savedData', JSON.stringify(this.detailAudio));
    } else {
      this.detailAudio = JSON.parse(localStorage.getItem('savedData'));
    }
  }

  ngOnInit() {
  }

}
