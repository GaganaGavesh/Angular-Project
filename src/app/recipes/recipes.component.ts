import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]//me component eke and meke child components wala RecipeService
  //eke same instance eka use karanna pluwan
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  //recipe ekak select welada kiyala licten karan inna ona 
  //enisa recipe service eka inject karanawa
  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{ this.selectedRecipe = recipe});
    //ES6 arrow function eken karanne 
    //recipe service eken emit karana recipe eka me component ekta ganna eka
  }

}
