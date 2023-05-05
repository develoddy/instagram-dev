import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { PromainComponent } from '@modules/usecases/components/profile/promain/promain.component';

const routes: Routes = [

  { path: '', 
    component: SkeletonComponent,
    children: [{
      path: '', loadChildren: () => import('./modules/usecases/usecases.module').then( (m) => m.UsecasesModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
