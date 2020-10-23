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
        this.ingredients.push(ingredient);//slice eken ena ekata thama push wennee
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

}