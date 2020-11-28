import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService,AuthResponseData } from './auth.service';
//AuthResponseData interface ekata export dapu nisa thama methana iport karanna pluwn une

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true; //Change the sign Up & login States 
  isLoading = false;//default loading ekaka nwei tynne, request eka send karanna gaththama loading true wenawa
  error: String = null;

  constructor(private authService: AuthService, private router: Router) { }

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

    let authObs: Observable<AuthResponseData>; //me observable eke tynne AuthResponseData kiyana data 
    //me Observable eka generic type ekak, e nisa api meke aththatama ena tika witharak dala AuthResponseData me type eka
    //hadagena tynawa

    this.isLoading = true;//methendi thema load wenna patangenne, response eka awama thama loading eka iwara wenne

    if(this.isLoginMode){
      authObs = this.authService.login(email,password);
    }else{
      //signup method eken Observable ekak return karanawa eka signup method eka call wena thana subscribe karanna ona
      //nathnam POST eka yanne ne, kauruth resoponce eka gana unandu nathnam angular eka request eka yawann ne
      authObs = this.authService.signUp(email,password);
    }
    //methana if else walin login signup walin ena observable dagannawa authObs kiyana observable ekata
    //itapassse e observable eka thama api yata subscribe karannee
    //code eka repeat wena nisa thama meka dala tynne 
    //authObs kiyana eka aniwa POST request eke response eke data tika ganna pluwn type ekakkama wenna onaa
    authObs.subscribe(
      (resdata)=>{
        this.isLoading = false;
        console.log(resdata);
        this.router.navigate(['/recipes']);
        //login eka done unama thama me recipe ekata yanne
      },
      //me observable eke tynne errorMessage eka witharai
      //eka thama api methenta ganna ona
      (errorMessage)=>{
        this.error = errorMessage;
        console.log(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();//clear the form
  }

}
