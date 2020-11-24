import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true; //Change the sign Up & login States 
  isLoading = false;//default loading ekaka nwei tynne, request eka send karanna gaththama loading true wenawa

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  

  //form eka ngForm type nisa thama mehema danne// eka import karanna ona
  onSubmit(form: NgForm){
    //me if condition eken extra validity ekak enawa 
    //hacker kenekta dev tool walin button enable karala request eka danna pluwan 
    //eth meken e ena invalid ewa allanawa
    if(!form.valid)
    {
      return;
    }

    // const wala danne aye me values kihedi wath edit karanna bari wenna
    //A class member cannot have const keyword
    const email = form.value.email
    const password = form.value.password;

    this.isLoading = true;//methendi thema load wenna patangenne, response eka awama thama loading eka iwara wenne

    if(this.isLoginMode){
      //..... Thama nee
    }else{
      //signup method eken Observable ekak return karanawa eka signup method eka call wena thana subscribe karanna ona
      //nathnam POST eka yanne ne, kauruth resoponce eka gana unandu nathnam angular eka request eka yawann ne
      this.authService.signUp(email,password).subscribe(
        (resdata)=>{
          this.isLoading = false;
          console.log(resdata);
        },
        (error)=>{
          this.isLoading = false;
          console.log(error);
        }
      );
    }

    console.log(form.value);
    form.reset();
  }

}
