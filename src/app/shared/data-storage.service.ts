import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})//mokaka hari service ekak mekata ganna wa nam thama injectable danne
//appModule eke providers eke danne nathiwa methana injectable eke object ekak widiyata danna plwan providers eke dana eka 
export class DataStoregeService{
    constructor(private http: HttpClient, private recipesService: RecipeService){
        //httpClient eka unlock kala app module eke
        //eka inject kala me data storage ekata
    }

    storeRecipies(){
        const recipies = this.recipesService.getRecipes();
        this.http.put('https://recipe-book-3f067.firebaseio.com/recipes.json',recipies).subscribe(
          response=>{
              console.log(response);
          }  
        );//recipes node ekak hadala ekata me data danawa
        //json kiyanne firebase requirement ekak
        //put eka dammama firebase eka me dana url eke tyna data aniwama override karanawa
        //component ekke subscription eketa interest ekak nathnam methanama subscribe karanawa
        //subscription eka component ekata wadagath nam ethana subscribe karanawa methanin return karagena
    }
}