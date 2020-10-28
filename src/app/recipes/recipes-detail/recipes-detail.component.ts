import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  //before routing
  // @Input() selectedRecipeDetail: Recipe;

  //after routing
  selectedRecipeDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    //const id = this.route.snapshot.params['id'];//meka load wena welawe eka witharai ganne//
    //recipe changes walata react karanna ona nisa anith krame danna ona

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.selectedRecipeDetail = this.recipeService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeDetail.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route})//eka level ekak passata ghilla
    //id eka add karala ilangata edit kalla add karanawa
  }
}
