import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  //before the shopping list service
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }


  //befire shopping list service
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;

  //   const newIngredient = new Ingredient(ingName,ingAmount);
    
  //   this.ingredientAdded.emit(newIngredient); 
  //   // this.ingredientAdded.emit({
  //   //   name: this.nameInputRef.nativeElement.value, 
  //   //   amount: this.amountInputRef.nativeElement.value});   
  // }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName,ingAmount);

    this.shoppingListService.onIngredientAdded(newIngredient);
  }

}
