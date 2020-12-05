import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Injectable({providedIn: 'root'})//mokaka hari service ekak mekata ganna wa nam thama injectable danne
//appModule eke providers eke danne nathiwa methana injectable eke object ekak widiyata danna plwan providers eke dana eka 
export class DataStoregeService{
    constructor(
        private http: HttpClient, 
        private recipesService: RecipeService, 
        private authService: AuthService){
        //httpClient eka unlock kala app module eke
        //eka inject kala me data storage ekata
        //authService eka gaththe user token eka request ekata ganna ona nisa
    }

    userToken :String = null;
    userSub :Subscription;
    
    //store karannath fetch karannath currently authenticted userge token eka ona
    //ekata thama me authService eka dala gannahadanne token eka
    storeRecipies(){
        this.userSub = this.authService.user.subscribe(user=>{
            this.userToken = user.token
        });
        const recipies = this.recipesService.getRecipes();
        this.http.put('https://recipe-book-3f067.firebaseio.com/recipes.json?auth='+this.userToken,recipies).subscribe(
          response=>{
              console.log(response);
          }  
        );//recipes node ekak hadala ekata me data danawa
        //json kiyanne firebase requirement ekak
        //put eka dammama firebase eka me dana url eke tyna data aniwama override karanawa
        //component ekke subscription eketa interest ekak nathnam methanama subscribe karanawa
        //subscription eka component ekata wadagath nam ethana subscribe karanawa methanin return karagena
        this.userSub.unsubscribe();
        this.userToken = null;
    }
    fetchRecipies(){
        //take returns an Observable that emits only the first count values emitted by the source Observable. 
        //If the source emits fewer
        //than count values then all of its values are emitted. After that, it completes,
        //regardless if the source completes.
        //automatically unsubscribe wenawa
        //this.authService.user.pipe(take(1)).subscribe(user=>{}) //me fetchRecipes eken return wenna ona loku 
        //observable ekak me user nui recipe tikai serama me observable ekata daganna ona
        //ekata thama exaustmap kiyana eka gannen

        return this.authService.user.pipe(
            take(1), 
            exhaustMap(user=>{
            return this.http.get<Recipe[]>(
                'https://recipe-book-3f067.firebaseio.com/recipes.json',
            {
                params: new HttpParams().set('auth', user.token)
            }
            );

        }),map(recipies=>{//me map eka rxjs operator eka pipe eka athule dana
            return recipies.map(recipe=>{//me map eka javascript ekak array ekak map karanna pluwn apata ona widiyata element transfer karala
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                //firebase ekata yana recipe eke ingredients nathnam eka empty array ekak widiyata yawanawa
                //ehema yawwe nathnam ingredient kiyana priperty eka recipe object ekata save wenne ne
            });
        }),
        tap(recipes=>{
            this.recipesService.setRecipies(recipes);
            this.userSub.unsubscribe();
            this.userToken = null;
        }));

        // this.userSub = this.authService.user.subscribe(user=>{
        //     this.userToken = user.token
        // });
        // //get eken eliyata enne Recipe[] type ekak kiyanna thama <Recipe[]> dala tynne
        // return this.http.get<Recipe[]>('https://recipe-book-3f067.firebaseio.com/recipes.json?auth='+this.userToken)
        // .pipe(map(recipies=>{//me map eka rxjs operator eka pipe eka athule dana
        //     return recipies.map(recipe=>{//me map eka javascript ekak array ekak map karanna pluwn apata ona widiyata element transfer karala
        //         return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        //         //firebase ekata yana recipe eke ingredients nathnam eka empty array ekak widiyata yawanawa
        //         //ehema yawwe nathnam ingredient kiyana priperty eka recipe object ekata save wenne ne
        //     });
        // }),
        // tap(recipes=>{
        //     this.recipesService.setRecipies(recipes);
        //     this.userSub.unsubscribe();
        //     this.userToken = null;
        // })//tap kiyana eka allow karanawa apata code ekak run karanna observable eke data walata aulak wenne nathuwa
        // // .subscribe(
        // //     (recipies)=>{
        // //         console.log(recipies);
        // //         this.recipesService.setRecipies(recipies)
        // //     }
        // // );
        
        // )
        
    }
}