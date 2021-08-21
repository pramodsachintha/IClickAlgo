import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAlgorithmsRoutingModule } from './basic-algorithms-routing.module';
import { BasicAlgorithmsComponent } from './basic-algorithms.component';
import { SelectionSortContainerComponent } from './selection-sort-container/selection-sort-container.component';


@NgModule({
  declarations: [BasicAlgorithmsComponent, SelectionSortContainerComponent],
  imports: [
    CommonModule,
    BasicAlgorithmsRoutingModule
  ]
})
export class BasicAlgorithmsModule { }
