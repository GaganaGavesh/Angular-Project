import { Component, OnDestroy, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  //mehemai simply array ekak hadanne
  //ingredients = [];

  //Before the shopping list service added
  // ingredients: Ingredient[] = [
    
  //   {name: 'orange', amount: 25}
  // ];

  //After the shopping list service added
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();//muladi tyna ingredients gannawa
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );//aluthen ingredients add karanas ewa update karanawa
  }
  //before shopping list servive added
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();//subscription eka digatama yana nisa component 
    //eke leave wenakota eka ain karanawa
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
}
