import { NgForOf } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //Commented After the forms come to scene
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;


  //before the shopping list service
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getingredient(index);
        this.shoppingListForm.setValue({
          'name':this.editedItem.name,
          'amount': this.editedItem.amount
        })
      }
    );
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

  onSubmit(form: NgForm){
    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)//update mode nam
    }else{
      this.shoppingListService.onIngredientAdded(newIngredient);//update mode eke nathnam , aluthma item add wenawa nam
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();//memory leak perevent karanawa 
    //unsubscribe karala thibbama sigatama eka tynawa
    console.log(this.editMode);
  }

}
