import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  
  declarations: [
    LoginComponent,
    AccountsComponent
  ],

  imports: [
    SharedModule,
    OnboardingRoutingModule,
    //AngularFireStorageModule
  ],
  
  providers: []
})
export class OnboardingModule { }
