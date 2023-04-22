import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: "feed", pathMatch: "full" },
    { path: 'feed', component: FeedComponent},
    { path: 'search', component: SearchComponent},
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsecasesRoutingModule { }
