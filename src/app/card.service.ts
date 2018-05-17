import { Injectable } from '@angular/core';
import { Card } from './card';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardCondition } from './condition';
import { CardSingle } from './cardSingle';
import { CardSingles } from './cardSingles';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'http://localhost:5000';

  private currentCid = '';

  constructor(
    private http: HttpClient
  ) { }

  setCurrentCid(cid: string): void {
    this.currentCid = cid;
  }

  getCurrentCid(): string {
    return this.currentCid;
  }

  getCard(cid: string): Observable<Card> {
    const url = this.cardsUrl + '/card/' + cid;
    return this.http.get<Card>(url);
  }

  getCardConditions(): Observable<CardCondition[]> {
    const url = this.cardsUrl + '/cardconditions';
    return this.http.get<CardCondition[]>(url);
  }

  getInventory(): Observable<CardSingles> {
    const url = this.cardsUrl + '/cardinventory/' + this.currentCid;
    return this.http.get<CardSingles>(url);
  }

  addCard(card: CardSingle): Observable<any> {
    const url = this.cardsUrl + '/card/';
    console.log("Trying to add: ", card);
    return this.http.post<CardSingle>(url, card, httpOptions);
  }

  editCard(card: CardSingle): Observable<any> {
    const url = this.cardsUrl + '/card/' + card.id;
    return this.http.put<CardSingle>(url, card, httpOptions);
  }

  removeCard(id: number): Observable<any> {
    const url = this.cardsUrl + '/card/' + id;
    return this.http.delete(url);
  }

}
