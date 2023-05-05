import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Children component
import { PromainComponent } from './promain/promain.component';
import { ProgridpostsComponent } from './progridposts/progridposts.component';
import { ProreelsComponent } from './proreels/proreels.component';
import { ProsavedComponent } from './prosaved/prosaved.component';
import { ProtaggedComponent } from './protagged/protagged.component';

const routes: Routes = [
     //{path: ':username', redirectTo: '', pathMatch: "full"},
    { path: '', component: ProgridpostsComponent },
    { path: 'reels', component: ProreelsComponent },
    { path: 'saved', component: ProsavedComponent },
    { path: 'tagged', component: ProtaggedComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }
