import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicAlgorithmsComponent } from './basic-algorithms.component';
import { InsertionSortContainerComponent } from './insertion-sort-container/insertion-sort-container.component';
import { SelectionSortContainerComponent } from './selection-sort-container/selection-sort-container.component';

const routes: Routes = [
  { path: '', component: BasicAlgorithmsComponent },
  { path: 'insertion-sort', component: InsertionSortContainerComponent},
  { path: 'selection-sort', component: SelectionSortContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAlgorithmsRoutingModule { }
