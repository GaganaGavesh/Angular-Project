import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

import { Subject, Subscription } from 'rxjs';

export class ShoppingListService{
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();//event emiter eka wagema subject ekath ganna pluwn 
    startedEditing = new Subject<number>();

    private igChangeSub: Subscription;
    private ingredients: Ingredient[] = [
    
        {name: 'orange', amount: 25}
      ];

    getIngredients(){
        return this.ingredients;
    }

    getingredient(index: number){
      return this.ingredients[index];
    }
    
    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);//slice eken ena copy ekata thama push wennee
       // this.ingredientsChanged.emit(this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice());//subject eken access karanne next kiyana eka
      }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.onIngredientAdded(ingredient);
        // }
        this.ingredients.push(...ingredients);//ingredient array ekata addIngredients eken ena 
        //array ekama danna be eke element thama danna ona 
        //... karanne epe array eke element ekak eka kadaganna eka
        //kadagena eka push karanawa array ekata
        //this.ingredientsChanged.emit(this.ingredients.slice()) //event emitter eken
        this.ingredientsChanged.next(this.ingredients.slice())//subject

    }

    //ingredient update kalama ekatama update eka wadinawa aluth list eka ingredient change event emitter ekata
    //danawa ingredient change una nisa
    //e nisa meka aye row ekakata enne ne
    updateIngredient(index: number,newingredient: Ingredient){
      this.ingredients[index] = newingredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index,1);//ingredients array eken me index eka tyna eka element ekak ain karanawa 
      this.ingredientsChanged.next(this.ingredients.slice());//deletion eken ingredient change wena nisa aye refactor
      //karanna ona ekata meka danne
    }

}