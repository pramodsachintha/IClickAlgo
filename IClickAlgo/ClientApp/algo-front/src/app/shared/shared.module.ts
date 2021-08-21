import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAlgoLayoutComponent } from './basic-algo-layout/basic-algo-layout.component';
import { BlockContainerComponent } from './block-container/block-container.component';
import { BlockElementComponent } from './block-element/block-element.component';



@NgModule({
  declarations: [BasicAlgoLayoutComponent, BlockContainerComponent, BlockElementComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
