import { Component, OnInit } from '@angular/core';
import{Company} from '../company';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  company: Company = {
    id: 25,
    name: 'Google',
    shortName:'GOOGL',
    yearlyHigh: 1001.15,
    yearlyLow:923.65,
    price:988.21   
  };
}
