import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment32',
  templateUrl: './assignment32.component.html',
  styleUrls: ['./assignment32.component.css']
})
export class Assignment32Component implements OnInit {

  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
