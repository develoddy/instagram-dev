import { NgModule } from '@angular/core';
import { UsecasesRoutingModule } from './usecases-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { DirectComponent } from './components/direct/direct.component';
import { MorepostsComponent } from './components/moreposts/moreposts.component';
import { AccounteditComponent } from './components/accountedit/accountedit.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    SearchComponent,
    ExploreComponent,
    ReelsComponent,
    DirectComponent,
    MorepostsComponent,
    AccounteditComponent,
    PeopleComponent
  ],
  imports: [
    SharedModule,
    UsecasesRoutingModule
  ]
})
export class UsecasesModule { }
