//This service is for sign users in and up, Manage the token
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';//aluth observable ekak create karanawa error eka wrap karala
//rxjs aniwaryen observable ekak return karanawa

import { User } from './user.model';

//responce data wala contain wenne me interface eke tyna data tika kiyala POST request 1ta danna thama meka haduwe
export interface AuthResponseData{
    //export kiyala dammama witharai wena thanakata import karanna pluwan
    idToken: String;
    email: String;
    refreshToken: String;
    expiresIn: String;
    localId: String;
    registered? : boolean;//registed kiyana eka optional handa thama ? dala tynne
}


@Injectable({providedIn: 'root'})//app module eke providers array ekata damma wage thama
//meka manually peoviders array ekata dammath me @Injectable kiyana eka aniwa onamai
//mko Http Client kiyana service eka mekata ganna nisa
//service ekakata service ekak inject karanakota aniwa @Injectable danna ona
export class AuthService {

    user = new Subject<User>();//aluth user emit karaanwaa, meka user ona wena thanakadi ganna ahaki
    token


    constructor(private http : HttpClient){}//meka thama service eka

    signUp(email: String, password: String){
        //post request ekak nisa data tika attach karanna ona 

        //POST EKEN ENA OBSERVABLE EKA RETURN KARANAWA ETHAKOTA ONA THANAKADI MEKE STATE EKA DANAGANNA AHAKI
        //POST method kiyanne generic type tyna request ekak e nisa thama <> athule type danna pluwan
        //hariyata lists wage scene ekak
        //e generic type danna pluwan POST resuest responce ekata eken ena responce, e tika api danna nisa 
        //e tika hariyatama mehemai kiyala interface ekak hadala , me type eke responce ekak thama aniwa enne kiyala 
        //kiyanawa
        //POST eken enne responce ekai error ekai thama, e observable eke tynne me deka
       return this.http.post<AuthResponseData>
       ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeNFjlXDZ7YT8VCJNrYh5VKynXft3KZ0Y',
      
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleResponse),tap(resData=>{
            this.handleAuthentication(
                resData.email, 
                resData.localId, 
                resData.idToken, 
                +resData.expiresIn)
            // const expirationDate = new Date(new Date().getTime() + +resData.expiresIn*1000);
            // //toke time eka current time ekata ekathu karala date ekakata wrap karanawa ethakota apata complete timestamp ekak 
            // //ganna pluwn expirationdate kiyana const ekata
            // const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
            // //dan api user details aragena tynne ilangata karanne user event ekak emit karanawa Subject kiyana eken 
            // //methanin karanne Emit karana eka, next kalama uda user kiyana subject eken eit wenawa aluth user

            // this.user.next(user);//emit the currently logged in user
        }));
        //catch error eka error rka catch karagannawa 
        //subscription eke error case ekata thama meka yannee
        //observable eke tyna  me catch karana error rkata karana magul tika karala ayemath me observable ekatama wrap
        //karanawa
        //pipe kalama observable eka pipe wenawaa ekata thawa kali add karanna ahaki or wenas karanna ahaki ethakota 
    }

    login(email: String,password: String){
        //meken enne observable ekak ekata kohedi hari subscribe karanna ona nathnam angular rka me POST request eka
        //yawanne nee. me subscription eken component ekata wadagathkamak tyenam api component eke subscribe karanawa
        //methenin me observable eka return karala
        //nathnam methanama subscribe karanna ahaki
        return this.http.post<AuthResponseData>//meken response eka enneth me type ekemmai eth registed eka meke aniwa tyenna ona
        ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeNFjlXDZ7YT8VCJNrYh5VKynXft3KZ0Y',
            {
                email: email,
                password: password,
                returnSecureToken: true 
            }).pipe(catchError(this.handleResponse),tap(resData=>{
                this.handleAuthentication(
                    resData.email, 
                    resData.localId, 
                    resData.idToken, 
                    +resData.expiresIn)
                })
        );
    }
    //meken return karanne observable ekak
    //eka thawa spesify karanawa me observable eken ena data "AuthResponseData" type ekee data thamai kiyala

    private handleAuthentication(email: String, userId: String,token: String, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
            //toke time eka current time ekata ekathu karala date ekakata wrap karanawa ethakota apata complete timestamp ekak 
            //ganna pluwn expirationdate kiyana const ekata
            const user = new User(
                email, 
                userId, 
                token, 
                expirationDate);
            //dan api user details aragena tynne ilangata karanne user event ekak emit karanawa Subject kiyana eken 
            //methanin karanne Emit karana eka, next kalama uda user kiyana subject eken eit wenawa aluth user

            this.user.next(user);//emit the currently logged in user
    }

    private handleResponse(errorRes: HttpErrorResponse){
        //ERROR HANDLING LOGIC
        let errorMessage = 'A unknown error occured';
            if(!errorRes.error || !errorRes.error.error){//errorRes ekee error key eka nathnam || errorRes eke nested error key nathnam
                return throwError(errorMessage);
                //throw an boservable (It is an error observable) and at the end it wraps tha errorMessage
            }
            switch(errorRes.error.error.message){
                //error responce eke error.error.message kiyana ekata thama error rkr type eka enne 
                //eka thama methana switch case eken allanne
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email is already exists'
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'This email not found'
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'Incorrect details, Please check your email and password'
                    break;
                    
              }
              return throwError(errorMessage);
              //throw an boservable (It is an error observable) and at the end it wraps tha errorMessage
    }
}