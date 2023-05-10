import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { DirectComponent } from './components/direct/direct.component';
import { PromainComponent } from './components/profile/promain/promain.component';
import { MorepostsComponent } from './components/moreposts/moreposts.component';
import { AccounteditComponent } from './components/accountedit/accountedit.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: '/', pathMatch: "full" },
    { path: '', component: FeedComponent},
    { path: 'search', component: SearchComponent},
    { path: 'explore', component: ExploreComponent},
    { path: 'explore/people', component: PeopleComponent},
    { path: 'reels/:id', component: ReelsComponent},
    { path: 'direct/inbox', component: DirectComponent},
    { path: ':username',
      component: PromainComponent,
      children: [{
        path: '', loadChildren: () => import('./components/profile/profile.module').then( (m) => m.ProfileModule )
      }]
    },
    { path: 'p/:id', component: MorepostsComponent},
    { path: 'accounts/edit', component: AccounteditComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsecasesRoutingModule { }

