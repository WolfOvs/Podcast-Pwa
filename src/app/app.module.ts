import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderComponentsModule } from 'ng-http-loader/components/ng-http-loader-components.module';
import { NgHttpLoaderServicesModule } from 'ng-http-loader/services/ng-http-loader-services.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DataService } from './data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PodcastlistService } from './podcastlist.service';
import { FilterPipe } from './filter.pipe';
import { DetailpodcastService } from './detail-podcast.service';
import { DetailAudioComponent } from './detail-audio/detail-audio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PodcastListComponent,
    routingComponents,
    FilterPipe,
    DetailAudioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderServicesModule,
    NgHttpLoaderComponentsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ DataService, PodcastlistService, DetailpodcastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
