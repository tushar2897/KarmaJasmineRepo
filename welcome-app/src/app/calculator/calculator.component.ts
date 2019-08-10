import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
a:number;
b:number;
  constructor() { }
  add(a,b):number{
    return a+b;
  }
  ngOnInit() {
  }

}
