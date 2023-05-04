import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PromainComponent } from './promain/promain.component';
import { ProgridpostsComponent } from './progridposts/progridposts.component';

// import comoonent children


@NgModule({
  declarations: [
    // Components hildren
    PromainComponent,
    ProgridpostsComponent
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
