import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'basic-algo', loadChildren: () => import('./features/basic-algorithms/basic-algorithms.module').then(m => m.BasicAlgorithmsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
