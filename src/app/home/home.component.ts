import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clickedEvent: Event;
  public clickedFilterEvent: Event;
  ngOnInit() {
  }
  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }
  childEventFilterClicked(event: Event) {
    this.clickedFilterEvent = event;
  }
  childEventClickedSearch(event: Event) {
    this.clickedEvent = event;
  }
}
