import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  beforeClicked = true;

  buttonStatus = true;

  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
    if(this.beforeClicked == false){
      this.buttonStatus = !this.buttonStatus;
    }
    this.beforeClicked = false;
    
    //console.log(this.interval);
  }

  onPauseGame(){
    clearInterval(this.interval);
    this.buttonStatus = !this.buttonStatus;
  }
}
