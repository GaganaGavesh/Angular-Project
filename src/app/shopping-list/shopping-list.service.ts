import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
    
        {name: 'orange', amount: 25}
      ];

    getIngredients(){
        return this.ingredients;
    }
    
    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);//slice eken ena copy ekata thama push wennee
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.onIngredientAdded(ingredient);
        // }
        this.ingredients.push(...ingredients);//ingredient array ekata addIngredients eken ena 
        //array ekama danna be eke element thama danna ona 
        //... karanne epe array eke element ekak eka kadaganna eka
        //kadagena eka push karanawa array ekata
        this.ingredientsChanged.emit(this.ingredients.slice())

    }

}