import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardSingle } from '../cardSingle';
import { CardCondition } from '../condition';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imgurl = 'http://localhost:5000/cardimage/001ca412629180934cffd4b493d55a5c1e5f311c.jpeg';

  inv: CardSingle = {
    price: '',
    cond: 0,
    indeck: false,
    isfoil: false
  }

  card: Card = {
    cid: '001ca412629180934cffd4b493d55a5c1e5f311c',
    name: 'Wall of Air',
    type: 'Creature - Wall',
    rarity: 'Uncommon',
    imgpath: '001ca412629180934cffd4b493d55a5c1e5f311c.jpeg',
    setcode: 'LEA',
    setname: 'Alpha'
  };

  constructor() { }

  ngOnInit() {

  }

}
