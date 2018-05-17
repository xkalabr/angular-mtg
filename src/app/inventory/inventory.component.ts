import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardSingle } from '../cardSingle';
import { CardService } from '../card.service';
import { CardSingles } from '../cardSingles';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() singleCard: CardSingle;
  @Output() singleCardChange = new EventEmitter<CardSingle>();

  cardList: CardSingles;

  setCard(index: number, pack: string) {
    const data = this.cardList[pack][index];
    this.singleCard = {
      cid: '',
      id: data.id,
      price: data.price,
      cond: data.condcode,
      indeck: pack === 'deck',
      isfoil: pack === 'foil'
    }
    this.singleCardChange.emit(this.singleCard)
  }

  deleteCard(id: number) {
    this.cardService.removeCard(id)
      .subscribe();
  }

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.populateList();
  }

  refresh(): void {
    this.populateList();
  }

  populateList(): void {
    this.cardService.getInventory()
      .subscribe(cards => {
        this.cardList = cards;
        console.log("the list", this.cardList);
      });
  }
}
