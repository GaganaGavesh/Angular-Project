import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmet24',
  templateUrl: './assignmet24.component.html',
  styleUrls: ['./assignmet24.component.css']
})
export class Assignmet24Component implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit(): void {
  }

  resetUser(){
    this.userName = '';
  }
  

}
