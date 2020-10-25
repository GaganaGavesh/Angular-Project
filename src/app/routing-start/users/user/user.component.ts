import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }
  //ActiveRoute kiyanne json ekak eke tynawa godak meta data

  ngOnInit(){
    this.user = {
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    //updated parameters observer karagannawa user object eka update karanawa
    //danata tyna state eka change karaganna ona nathnam me subscribe method eka add karannna ona ne
    //snapshot method eken yanna pluwan
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      });
  }

}
