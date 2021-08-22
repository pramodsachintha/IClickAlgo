import { Injectable } from '@angular/core';
import { BlockElement } from '../models/block-element';

@Injectable({
  providedIn: 'root'
})
export class BlockElementGenerationService {

  constructor() { }

  generateBlocks(length: number) : Array<BlockElement>{
    const blocks = [];
    for (let index = 0; index < length; index++) {
      blocks[index] = {
        id: index,
        order: index,
        value: Math.floor(Math.random()*100)
      } as BlockElement;
    }
    return blocks;
  }
}
