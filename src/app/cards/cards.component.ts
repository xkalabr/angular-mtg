import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../card';
import { CardSingle } from '../cardSingle';
import { CardCondition } from '../condition';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imgurl: string;
  card: Card = {
    cid: '',
    name: '',
    type: '',
    rarity: '',
    imgpath: '',
    setname: '',
    setcode: ''
  }

  inv: CardSingle = {
    cid: '',
    id: 0,
    price: '',
    cond: 0,
    indeck: false,
    isfoil: false
  }

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadCard();
  }

  loadCard(): void {
    const cid = this.route.snapshot.paramMap.get('id');
    this.cardService.setCurrentCid(cid);
    this.cardService.getCard(cid)
      .subscribe(card => {
        this.card = card;
        this.imgurl = 'http://localhost:5000/cardimage/' + this.card.imgpath;
      });
  }

}
