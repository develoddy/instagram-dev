import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ResizeObserverModule } from '@ng-web-apis/resize-observer';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    // Core.
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ResizeObserverModule,
    BrowserAnimationsModule, 
    HttpClientModule,
     // FIREBASE
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
