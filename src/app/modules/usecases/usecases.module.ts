import { NgModule } from '@angular/core';
import { UsecasesRoutingModule } from './usecases-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { DirectComponent } from './components/direct/direct.component';

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    SearchComponent,
    ExploreComponent,
    ReelsComponent,
    DirectComponent
  ],
  imports: [
    SharedModule,
    UsecasesRoutingModule
  ]
})
export class UsecasesModule { }
