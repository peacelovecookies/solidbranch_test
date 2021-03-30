import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from '../data';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  transactions = TRANSACTIONS;

  constructor() { }

  filterByType = (type: string) => this.transactions.filter((transaction: Transaction) => transaction.type === type)

  ngOnInit(): void {
  }

}
