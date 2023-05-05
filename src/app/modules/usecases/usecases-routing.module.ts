import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelsComponent } from './components/reels/reels.component';
import { DirectComponent } from './components/direct/direct.component';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { PromainComponent } from './components/profile/promain/promain.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: '', redirectTo: '/', pathMatch: "full" },
    { path: '', component: FeedComponent},
    { path: 'search', component: SearchComponent},
    { path: 'explore', component: ExploreComponent},
    { path: 'reels/:id', component: ReelsComponent},
    { path: 'direct/inbox', component: DirectComponent},
    {
      path: ':username',
      component: PromainComponent,
      children: [{
        path: '', loadChildren: () => import('./components/profile/profile.module').then( (m) => m.ProfileModule )
      }]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsecasesRoutingModule { }

