import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    //this.recipeSelected.emit();//event emit kalama meken parent ekata eken eke parent yanna ona
    //eka diga process ekak,so recipe service eka use karanna hadanne.eken lesiyenma centralize 
    //karanna pluwn me long process eka

    //recipe service ekekn evint emit karanna emit method call eka
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
