import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { DirectComponent } from './components/direct/direct.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: "main", pathMatch: "full" },
    { path: '', component: FeedComponent},
    { path: 'search', component: SearchComponent},
    { path: 'explore', component: ExploreComponent},
    { path: 'reels', component: ReelsComponent},
    { path: 'direct', component: DirectComponent},
    { path: 'profile', component: ProfileComponent},
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsecasesRoutingModule { }
