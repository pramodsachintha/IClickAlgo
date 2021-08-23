import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { BlockElement } from 'src/app/core/models/block-element';
import { BlockElementGenerationService } from 'src/app/core/services/block-element-generation.service';
import { BlockContainerComponent } from 'src/app/shared/block-container/block-container.component';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq } from 'lodash';
@Component({
  selector: 'algo-selection-sort-container',
  templateUrl: './selection-sort-container.component.html',
  styleUrls: ['./selection-sort-container.component.scss']
})
export class SelectionSortContainerComponent extends BlockContainerComponent<BlockElement> implements OnInit {

  // iterationIndex = 1;
  initialModel : Array<BlockElement> = [];

  constructor(private generationService: BlockElementGenerationService) {
    super();
   }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.iterationIndex = 0;
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
    console.log(this.steps);
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
    let minimum = {} as BlockElement;
    if (blocks) {

      if (this.iterationIndex > blocks?.length -1) {
        //reset iteration index
        return blocks;
      }
      const [currentElement] = blocks.filter(el => el.order === this.iterationIndex);
      minimum = currentElement;
      for (let index = this.iterationIndex + 1; index < blocks?.length-1; index++) {
        const [nextElemenet] = blocks.filter(el => el.order === index);
        if (nextElemenet.value <  minimum.value) {
          minimum = nextElemenet;
        }
      }
      const temp = minimum.order;
      minimum.order = currentElement.order;
      currentElement.order = temp;
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
