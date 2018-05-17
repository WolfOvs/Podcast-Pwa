import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list-component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {
  @Input() event: Event;
  @Input() filter: Event;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToDetailPage(item, id) {
    this.router.navigate(['podcast', id]);
  }

   truncateLabel(string, n) {
    return (string.length > n) ? `${string.substr(0, n - 1)}${'...'}` : string;
  }
}
