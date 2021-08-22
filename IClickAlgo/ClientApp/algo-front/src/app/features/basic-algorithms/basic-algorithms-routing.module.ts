import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicAlgorithmsComponent } from './basic-algorithms.component';
import { SelectionSortContainerComponent } from './selection-sort-container/selection-sort-container.component';

const routes: Routes = [
  { path: '', component: BasicAlgorithmsComponent },
  { path: 'insertion-sort', component: SelectionSortContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAlgorithmsRoutingModule { }
