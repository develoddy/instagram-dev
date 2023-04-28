import { NgModule } from '@angular/core';
import { UsecasesRoutingModule } from './usecases-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    UsecasesRoutingModule
  ]
})
export class UsecasesModule { }
