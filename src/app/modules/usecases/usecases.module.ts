import { NgModule } from '@angular/core';
import { UsecasesRoutingModule } from './usecases-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  declarations: [
    MainComponent,
    FeedComponent
  ],
  imports: [
    SharedModule,
    UsecasesRoutingModule
  ]
})
export class UsecasesModule { }
