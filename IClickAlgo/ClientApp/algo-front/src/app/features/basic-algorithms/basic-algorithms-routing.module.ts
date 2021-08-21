import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicAlgorithmsComponent } from './basic-algorithms.component';

const routes: Routes = [{ path: '', component: BasicAlgorithmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAlgorithmsRoutingModule { }
