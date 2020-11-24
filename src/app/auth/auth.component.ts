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

    if(this.isLoginMode){
      //..... Thama nee
    }else{
      //signup method eken Observable ekak return karanawa eka signup method eka call wena thana subscribe karanna ona
      //nathnam POST eka yanne ne, kauruth resoponce eka gana unandu nathnam angular eka request eka yawann ne
      this.authService.signUp().subscribe(
        (resdata)=>{
          console.log(resdata);
        },
        (error)=>{
          console.log(error);
        }
      );
    }

    console.log(form.value);
    form.reset();
  }

}
