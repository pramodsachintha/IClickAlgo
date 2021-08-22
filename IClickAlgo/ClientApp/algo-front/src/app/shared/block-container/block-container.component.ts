import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'algo-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.scss']
})
export class BlockContainerComponent<T> implements OnInit {

  protected _model?: Array<T> ;

  protected steps?: Array<Array<T>> ;

  protected iterationIndex = 1;

  protected iterate(sortFn: (array?: Array<T>) => Array<T> ): Array<T> {
    return sortFn(this._model);
  }

  protected resetIterationIndex(): void {
    this.iterationIndex = 0;
  }

  protected resetSteps(): void {
    this._model = [];
    this.iterationIndex = 1;
    this.steps = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
