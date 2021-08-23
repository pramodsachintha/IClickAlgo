import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { BlockElement } from 'src/app/core/models/block-element';
import { BlockElementGenerationService } from 'src/app/core/services/block-element-generation.service';
import { BlockContainerComponent } from 'src/app/shared/block-container/block-container.component';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq } from 'lodash';
@Component({
  selector: 'algo-insertion-sort-container',
  templateUrl: './insertion-sort-container.component.html',
  styleUrls: ['./insertion-sort-container.component.scss']
})
export class InsertionSortContainerComponent extends BlockContainerComponent<BlockElement> implements OnInit {

  // iterationIndex = 1;
  initialModel : Array<BlockElement> = [];

  constructor(private generationService: BlockElementGenerationService) {
    super();
   }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.initialModel = this.generationService.generateBlocks(10);
    this._model = cloneDeep(this.initialModel);
  }

  get Model() {
    return this._model;
  }

  get Steps() {
    return this.steps;
  }

  stepFoward(): void {
    if(this._model) {
      this.steps = [...this.steps || [], {step: cloneDeep(this._model), iterartionIndex: this.iterationIndex}];
    }
    this._model = this.iterate(this.sortingFn);
    if (this._model) {
      this._model =  this._model.sort((item1, item2) => {
        return item1.order -  item2.order;
      });
    }
  }

  skipFoward(): void {
    if (this._model) {
        while(this.iterationIndex < this._model?.length ) {
          this.stepFoward();
        }
    }
  }

  sortingFn = (blocks?: Array<BlockElement>): Array<BlockElement> => {

    if (blocks) {

      if (this.iterationIndex > blocks?.length -1) {
        //reset iteration index
        return blocks;
      }
      for (let index = this.iterationIndex; index > 0; index--) {
        const [firstElement] = blocks.filter(el => el.order === index);
        const [secondElemenet] = blocks.filter(el => el.order === index - 1);
        if (firstElement.value <  secondElemenet.value) {
          const temp = firstElement.order;
          firstElement.order = secondElemenet.order;
          secondElemenet.order = temp;
        }
      }
      this.iterationIndex++;
      return blocks;
    }
    return [];
  }

  reset(): void {
    this.resetSteps();
    this.init();
  }

}
