import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  tabs: string[] = ['income', 'outcome', 'loans', 'investments'];
  tabIndex: string;

  constructor(private route: ActivatedRoute) {
    this.tabIndex = this.route.snapshot.queryParams.tab;
  }

  isActive = (tabType: string) => tabType === this.tabs[+this.tabIndex];

  ngOnInit(): void {
  }

}
