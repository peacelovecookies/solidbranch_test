import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardsComponent } from '../cards/cards.component';
import { Transaction } from '../entities/Transaction';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent extends CardsComponent implements OnInit {
  tabs: string[] = ['income', 'outcome', 'loans', 'investments'];
  tabIndex: string;

  constructor(private route: ActivatedRoute) {
    super();
    this.tabIndex = this.route.snapshot.queryParams.tab;
  }

  isActive = (tabType: string) => tabType === this.tabs[+this.tabIndex];

  getFullName = (transaction: Transaction) => {
    const { first, last } = transaction.name;
    return `${first} ${last}`;
  }

  getAmount = (transaction: Transaction) => 1000; // #TODO: find out what it should be returned here

  filterByType = (type: string) => this.transactions
    .filter((transaction: Transaction) => transaction.type === type || transaction.type === type.slice(0, -1))

  ngOnInit(): void {
  }

}
