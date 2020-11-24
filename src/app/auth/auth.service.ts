//This service is for sign users in and up, Manage the token
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//responce data wala contain wenne me interface eke tyna data tika kiyala POST request 1ta danna thama meka haduwe
interface AuthResponseData{
    //king: String;
    idToken: String;
    email: String;
    refreshToken: String;
    expiresIn: String;
    localId: String;
}


@Injectable({providedIn: 'root'})//app module eke providers array ekata damma wage thama
//meka manually peoviders array ekata dammath me @Injectable kiyana eka aniwa onamai
//mko Http Client kiyana service eka mekata ganna nisa
//service ekakata service ekak inject karanakota aniwa @Injectable danna ona
export class AuthService {
    constructor(private http : HttpClient){}

    signUp(){
        //post request ekak nisa data tika attach karanna ona 

        //POST EKEN ENA OBSERVABLE EKA RETURN KARANAWA ETHAKOTA ONA THANAKADI MEKE STATE EKA DANAGANNA AHAKI
        //POST method kiyanne generic type tyna request ekak e nisa thama <> athule type danna pluwan
        //hariyata lists wage scene ekak
        //e generic type danna pluwan POST resuest responce ekata eken ena responce, e tika api danna nisa 
        //e tika hariyatama mehemai kiyala interface ekak hadala , me type eke responce ekak thama aniwa enne kiyala 
        //kiyanawa
       return this.http.post<AuthResponseData>
       ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyBeNFjlXDZ7YT8VCJNrYh5VKynXft3KZ0Y]',
    //    'Content-Type: application/json',
    //         {
    //             email: email,
    //             password: password,
    //             returnSecureToken: true
    //         }
        {"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}
        );
    }
}