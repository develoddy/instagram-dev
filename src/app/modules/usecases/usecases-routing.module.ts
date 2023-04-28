import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: "main", pathMatch: "full" }, // feed
    { path: '', component: FeedComponent},
    { path: 'search', component: SearchComponent},
    { path: 'profile', component: ProfileComponent},
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsecasesRoutingModule { }
