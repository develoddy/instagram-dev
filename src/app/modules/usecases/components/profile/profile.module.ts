import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PromainComponent } from './promain/promain.component';
import { ProgridpostsComponent } from './progridposts/progridposts.component';
import { ProreelsComponent } from './proreels/proreels.component';
import { ProsavedComponent } from './prosaved/prosaved.component';
import { ProtaggedComponent } from './protagged/protagged.component';

@NgModule({
  declarations: [
      PromainComponent,
      ProgridpostsComponent,
      ProreelsComponent,
      ProsavedComponent,
      ProtaggedComponent
  ],
  imports: [
      SharedModule,
      ProfileRoutingModule
  ]
})
export class ProfileModule { }
