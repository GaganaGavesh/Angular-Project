import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        
        new Recipe('A test Recipe 1', 
                    'This is simply a test 1', 
                    'assets/coffee.jpg'),
    
        new Recipe('A test Recipe 2', 
                   'This is simply a test 2', 
                   'assets/karapincha.jpg'),
    
        new Recipe('A test Recipe 3', 
                   'This is simply a test 3', 
                   'assets/item3.jpg'),
    
        new Recipe('A test Recipe 4', 
                   'This is simply a test 4', 
                   'assets/item4.webp')
      ];

      getRecipes(){
          return this.recipes.slice();//exact copy ekak denne recipes array eke
          //array kiyanne reference type ekak so ewa object widiyata denne ne
          //reference ekak widiyata thama denne
          //slice kiyala dammama apita kohomawath recipes array eka access karanna be
          //copy ekama witharai access karanna pluwan
      }
}