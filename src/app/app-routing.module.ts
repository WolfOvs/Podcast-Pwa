import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomeComponent } from './home/home.component';
import { DetailAudioComponent } from './detail-audio/detail-audio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast/:id', component: DetailPageComponent },
  { path: 'podcast/:id/episode/:episodeId', component: DetailAudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: [],
})


export class AppRoutingModule { }

export const routingComponents = [HomeComponent, DetailPageComponent];
