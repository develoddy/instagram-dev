import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptorService, multi: true},
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  declarations: [],
  
})
export class CoreModule { }
