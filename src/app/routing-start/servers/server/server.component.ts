import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router) { }//mokak hari route ekakata navigate karanawa nam Router eka thama ganne

  ngOnInit() {
    //serverresolver eken ganna data route eken ganne
    this.route.data.subscribe(
      (data: Data)=>{
        this.server = data['server'];//route wala tyna server kiyana word ekama tyenna ona resolver ekata tyna
      }
    )

    //url eke tyna hama ekama string, e nisa apata numbers ganna ona nam ewa cast karanna ona 
    //ekata cast karanna oana eka issarahata + dammama hari
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // //route params change ekak wenawada kiyala balagena innawa unoth aye server details maru karanawa
    // this.route.params.subscribe(
    //   (params: Params)=>{
    //     this.server = this.serversService.getServer(+params['id']);
    //  }
    //)


  }

  onEdit(){
    //this.router.navigate(['/servers',this.server.id,'edit']);//mekath hari
    this.router.navigate(['edit'],{relativeTo: this.route ,queryParamsHandling: 'preserve'});//current route ekata sapekshawa edit walata yanawa
  }
}
