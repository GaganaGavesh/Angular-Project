import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  //route eken id eka ganna activated route eka inject karaanawa
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;//if else ekakk wage not null nam true return wenawa
        console.log('1 '+this.editMode);
        // if(params['id'] != null){
        //   this.editMode = true;
        // }else{
        //   this.editMode = false;

        // }
        // console.log('1 '+this.editMode);
      }
    )
  }

}
