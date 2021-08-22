import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAlgorithmsRoutingModule } from './basic-algorithms-routing.module';
import { BasicAlgorithmsComponent } from './basic-algorithms.component';
import { SelectionSortContainerComponent } from './selection-sort-container/selection-sort-container.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BasicAlgorithmsComponent, SelectionSortContainerComponent],
  imports: [
    CommonModule,
    BasicAlgorithmsRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class BasicAlgorithmsModule { }
