import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-optionalassignment',
  templateUrl: './optionalassignment.component.html',
  styleUrls: ['./optionalassignment.component.css']
})
export class OptionalassignmentComponent implements OnInit {

  oddNumber: number[] = [];//type eka danawata kiyanne type definition karanawa kiyala
  evenNumber: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(lastnumber){
    console.log(lastnumber);
    if(lastnumber % 2 === 0)
      this.evenNumber.push(lastnumber);
    else
    this.oddNumber.push(lastnumber);
  }

}
