import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Subject} from 'rxjs';

@Injectable()//recipe service eken shopping list service eka call karanwa
export class RecipeService{

    //recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    
    private recipes: Recipe[] = [
        
        new Recipe('A test Recipe 1', 
                    'This is simply a test 1', 
                    'assets/coffee.jpg',
                    [
                        new Ingredient('Coffee Bags',2),
                        new Ingredient('Coffee Bags',2),
                        new Ingredient('Coffee Bags',2),
                        new Ingredient('Coffee Bags',2)
                    ]),
    
        new Recipe('A test Recipe 2', 
                   'This is simply a test 2', 
                   'assets/karapincha.jpg',
                   [
                       new Ingredient('Curry leaves',25)
                   ]),
    
        new Recipe('A test Recipe 3', 
                   'This is simply a test 3', 
                   'assets/item3.jpg',
                   [
                       new Ingredient('Coconut shells',25)
                   ]),
    
        new Recipe('A test Recipe 4', 
                   'This is simply a test 4', 
                   'assets/item4.webp',
                   [
                       new Ingredient('Cinnamon',2)
                   ])
      ];

      constructor(private shoppingListService: ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();//exact copy ekak denne recipes array eke
          //array kiyanne reference type ekak so ewa object widiyata denne ne
          //reference ekak widiyata thama denne
          //slice kiyala dammama apita kohomawath recipes array eka access karanna be
          //copy ekama witharai access karanna pluwan
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
}