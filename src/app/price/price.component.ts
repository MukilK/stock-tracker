import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  // ['GOOGL', 'VTI', 'VXUS', 'FB', 'CVS', 'MU', 'MSFT',
  // 'CSX', 'NVDA', 'AMAT', 'EA', 'TTWO', 'CELG', 'T', 'GLD', 'JD', 'RAD', 'WYNN', 'JNJ', 'PG'];

  companies: Company[] = [ {
    id: 25,
    name: 'Google',
    Ticker: 'GOOGL',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'Vanguard Total Stock',
    Ticker: 'VTI',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'Vanguard Total International ETF',
    Ticker: 'VXUS',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'FaceBook',
    Ticker: 'Fb',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'CVS',
    Ticker: 'CVS',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'Micron',
    Ticker: 'MU',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'Microsoft',
    Ticker: 'MSFT',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  },
  {
    id: 25,
    name: 'CSX Corp',
    Ticker: 'CSX',
    yearlyHigh: 1001.15,
    yearlyLow: 923.65,
    price: 988.21
  }


];
  constructor() { }

  ngOnInit() {

  }



}
