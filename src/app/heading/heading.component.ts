import { Component, OnInit } from '@angular/core';
import { TRANSACTIONS } from '../data';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  transactions = TRANSACTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
