import { Component, OnInit, Input } from '@angular/core';
import { CardSingle } from '../cardSingle';
import { CardCondition } from '../condition';
import { CardService } from '../card.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  
  @Input() entry: CardSingle;
  
  conditions: CardCondition[];

  constructor(
    private cardService: CardService
  ) { }

  addOrEdit(): string {
    if (this.entry.id != 0) {
      return 'Edit';
    } else {
      return 'Add';
    }
  }

  doCancel() {
    this.entry = {
      cid: '',
      id: 0,
      price: '',
      cond: 0,
      indeck: false,
      isfoil: false
    }
  }

  doAddOrEdit(): void {
    this.entry.cid = this.cardService.getCurrentCid();
    if (this.entry.id == 0) {
      this.cardService.addCard(this.entry)
        .subscribe();
    } else {
      this.cardService.editCard(this.entry)
        .subscribe();
    }
    this.doCancel();
  }

  getConditions(): void {
    this.cardService.getCardConditions()
      .subscribe(result => this.conditions = result);
  }

  ngOnInit() {
    this.getConditions();
  }

}
