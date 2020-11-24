import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true; //Change the sign Up & login States 

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  //form eka ngForm type nisa thama mehema danne// eka import karanna ona
  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }

}
