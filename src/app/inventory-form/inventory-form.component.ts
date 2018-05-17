import { Component, OnInit, Input } from '@angular/core';
import { CardSingle } from '../cardSingle';
import { CardCondition } from '../condition'

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  
  @Input() entry: CardSingle;
  
  conditions: CardCondition[];

  constructor() { }

  getConditions(): CardCondition[] {
    return new Array(
      { id: 0, val: 'Unset'},
      { id: 10, val: 'NM' },
      { id: 20, val: 'LP' },
      { id: 30, val: 'MP' },
      { id: 40, val: 'HP' },
      { id: 50, val: 'DM' }
    );
  }

  ngOnInit() {
    this.conditions = this.getConditions();
  }

}
