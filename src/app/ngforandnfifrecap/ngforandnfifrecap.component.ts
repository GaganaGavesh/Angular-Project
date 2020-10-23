import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforandnfifrecap',
  templateUrl: './ngforandnfifrecap.component.html',
  styleUrls: ['./ngforandnfifrecap.component.css']
})
export class NgforandnfifrecapComponent implements OnInit {
  numbers = [1,2,3,4,5,6];
  oddNumbers = [1,3,5];
  evennumbers = [2,4,6];
  value = 10;
  onlyOdd = false;

  constructor() { }

  ngOnInit(): void {
  }

}
