import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})//mokaka hari service ekak mekata ganna wa nam thama injectable danne
//appModule eke providers eke danne nathiwa methana injectable eke object ekak widiyata danna plwan providers eke dana eka 
export class DataStoregeService{
    constructor(private http: HttpClient){
        //httpClient eka unlock kala app module eke
        //eka inject kala me data storage ekata
    }
}