import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  lists = [
    {
      'icon' : 'assets/ico-calls.png',
      'header': 'CALLS',
      'value': '10/15'
    },
    {
      'icon' : 'assets/ico-wins.png',
      'header': 'WINS',
      'value': '1/3'
    },
    {
      'icon' : 'assets/ico-revenue.png',
      'header': 'INCREMENTED REVENUE',
      'value': '80K/100K'
    }
  ];

  funnels = [
    {
      'mode' : 'Lead In',
      'value': '25'
    },
    {
      'mode' : 'Contact Made',
      'value': '18'
    },
    {
      'mode' : 'Needs Defined',
      'value': '12'
    },
    {
      'mode' : 'Proposnal Made',
      'value': '8'
    },
    {
      'mode' : 'Negotiations Started',
      'value': '5'
    },
    {
      'mode' : 'WON',
      'value': '3'
    }
  ];

  profiles = [
    {
      'name': 'John Doe',
      'mrr': '5230',
      'logos': '102',
      'calls': '30'
    },
    {
      'name': 'Jane Smith',
      'mrr': '4586',
      'logos': '95',
      'calls': '23'
    },
    {
      'name': 'Ethan Hunt',
      'mrr': '3500',
      'logos': '82',
      'calls': '10'
    }
  ];
  ngOnInit(): void {
  }

}
