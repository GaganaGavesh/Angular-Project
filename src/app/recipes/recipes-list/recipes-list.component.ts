import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';

import {Recipe} from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  //recipes kiyanne variable ekak eke type eka thama Recipe
  //e kiyannne mm kalin hadapu recipe modele eke tyna class eke obi eke type eka
  //methana thama apata ona obj eka create karanne constructor ekata data yawala
  //recipes kiyanne array ekak,Recipe object thama e array eke tynne
  // recipes: Recipe[] = [
  //   //Recipe class bluprint eken obj ekak hadanawa
  //   //new keyword eka dala
  //   // new Recipe('A test Recipe 1', 
  //   //            'This is simply a test 1', 
  //   //            'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
  //   new Recipe('A test Recipe 1', 
  //               'This is simply a test 1', 
  //               'assets/coffee.jpg'),

  //   new Recipe('A test Recipe 2', 
  //              'This is simply a test 2', 
  //              'assets/karapincha.jpg'),

  //   new Recipe('A test Recipe 3', 
  //              'This is simply a test 3', 
  //              'assets/item3.jpg'),

  //   new Recipe('A test Recipe 4', 
  //              'This is simply a test 4', 
  //              'assets/item4.webp')
  // ];

  recipes: Recipe[] = [];

  //event emitter use karanawa nam
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  //event emitter use karana coee eka
  // onRecipeSelrcted(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}
