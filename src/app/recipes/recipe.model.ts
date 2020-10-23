import { NgModel } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    //apata reuse karanna ona obj eke properties define karanawa
    //meka bluprint ekak ape object eke

    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}

//meka thama recipe model eka 
//meka ona thanaka use karanna pluwan 
//use karana hama thanama recipe tynne me structure ekenma thama