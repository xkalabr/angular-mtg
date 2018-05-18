import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private sets = [];
  private setList = [];
  private searchList = [];
  selectedSet = '';
  searchterm = '';

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.loadSets();
  }

  listSet(): void {
    this.cardService.getSetList(this.selectedSet)
      .subscribe(setList => this.setList = setList);
  }

  listClear(): void {
    this.setList = [];
  }

  loadSets(): void {
    this.cardService.getSets()
      .subscribe(sets => this.sets = sets);
  }

  searchCards(): void {
    this.cardService.search(this.searchterm)
      .subscribe(searchList => this.searchList = searchList);
  }

}
