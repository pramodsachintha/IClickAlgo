import { Component, Input, OnInit } from '@angular/core';
import { BlockElement } from 'src/app/core/models/block-element';

@Component({
  selector: 'algo-block-element',
  templateUrl: './block-element.component.html',
  styleUrls: ['./block-element.component.scss']
})
export class BlockElementComponent implements OnInit {

  private _model? : BlockElement
  private _iterationIndex? : number;

  @Input()
  set Model(value: BlockElement) {
    this._model = value;
  }

  get model() {
    return this._model;
  }

  @Input()
  set IterationIndex(value: number) {
    this._iterationIndex = value;
  }

  get iterationIndex() {
    return this._iterationIndex;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
