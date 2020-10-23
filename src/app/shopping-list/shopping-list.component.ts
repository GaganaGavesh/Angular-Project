import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //mehemai simply array ekak hadanne
  //ingredients = [];

  //Before the shopping list service added
  // ingredients: Ingredient[] = [
    
  //   {name: 'orange', amount: 25}
  // ];

  //After the shopping list service added
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();//muladi tyna ingredients gannawa
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );//aluthen ingredients add karana ewa update karanawa
  }
  //before shopping list servive added
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
