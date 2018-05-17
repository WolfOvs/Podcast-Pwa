import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAudioComponent } from './detail-audio.component';

describe('DetailAudioComponent', () => {
  let component: DetailAudioComponent;
  let fixture: ComponentFixture<DetailAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
