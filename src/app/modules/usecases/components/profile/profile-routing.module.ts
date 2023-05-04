import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Children component
import { PromainComponent } from './promain/promain.component';
import { ProgridpostsComponent } from './progridposts/progridposts.component';



const routes: Routes = [{
  path: ':username', component: ProgridpostsComponent,
  children: [
    //{ path: '', redirectTo: '/', pathMatch: "full" },
    { path: 'grid', component: ProgridpostsComponent}
    /*{ path: 'reels', component: SearchComponent},
    { path: 'saved', component: ExploreComponent},
    { path: 'tagged', component: ReelsComponent},*/
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
