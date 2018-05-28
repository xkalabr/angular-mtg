import { Component, OnInit, Input } from '@angular/core';
import { CardSingle } from '../cardSingle';
import { CardCondition } from '../condition';
import { CardService } from '../card.service';
import { InventoryComponent } from '../inventory/inventory.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {

  @Input() entry: CardSingle;
  @Input() invList: InventoryComponent;
  
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

  validateForm(): boolean {
    var retval = true;
    if (this.entry.cond > 0 && this.entry.price != '') {
      retval = false;
    }
    return retval;
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
    setTimeout(this.invList.populateList(),400);
  }

  getConditions(): void {
    this.cardService.getCardConditions()
      .subscribe(result => this.conditions = result);
  }

  ngOnInit() {
    this.getConditions();
  }

}
