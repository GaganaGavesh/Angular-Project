import { NgModel } from '@angular/forms';
export class Recipe{
    //apata reuse karanna ona obj eke properties define karanawa
    //meka bluprint ekak ape object eke

    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

//meka thama recipe model eka 
//meka ona thanaka use karanna pluwan 
//use karana hama thanama recipe tynne me structure ekenma thama