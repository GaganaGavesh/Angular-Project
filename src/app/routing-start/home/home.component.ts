import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //mekata kiyanne inject karanawa kiyala
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadServers(id: number){
    //complex calculation
    //.ts eke route hadana ekata kiyanne programable way ekata karanawa kiyala
    this.router.navigate([
      '/servers', 
      id, 
      'edit'], 
      {queryParams: {allowEdit: '1'}, fragment: 'Loading'}
    );//absolute path eka thama danna ona

  }

}
