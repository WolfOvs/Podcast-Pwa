import {Component, OnInit, EventEmitter, Output, ɵEMPTY_ARRAY} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PodcastlistService } from '../podcastlist.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() eventClicked: EventEmitter<any> = new EventEmitter<Event>();
  @Output() eventFilterClicked: EventEmitter<any> = new EventEmitter<Event>();
  name: string;
  allPodCastList: any;
  allPodCast: any;
  isDetail: boolean;
  countItems: number;
  constructor (private getPodcastListService: PodcastlistService, private route: ActivatedRoute, private router: Router) {

    const id = route.snapshot.paramMap.get('id');
    if (!id) {
      this.allPodCastList = this.getPodCastList(event);
    } else {
       this.isDetail = true;
    }
  }

  ngOnInit() {
  }

  onkeyupEV(event: any) {
    this.name = event.target.value;
    this.eventFilterClicked.emit(this.name);
  }

  getPodCastList(event: Event): void {
    this.getPodcastListService.getPodcastList()
      .subscribe(
        (data) => {
      this.allPodCast = data;
      this.allPodCastList = this.allPodCast.feed.entry;
      this.countItems = this.allPodCastList.length;
      const result = this.allPodCastList.map(function(el) {
        const o = Object.assign({}, el);
        o.filterKey = o['im:name'].label + ' ' + o['im:artist'].label;
        return o;
      });
      this.eventClicked.emit(result);
     }
    );
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
