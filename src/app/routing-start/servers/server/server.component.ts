import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    //url eke tyna hama ekama string, e nisa apata numbers ganna ona nam ewa cast karanna ona 
    //ekata cast karanna oana eka issarahata + dammama hari
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    //route params change ekak wenawada kiyala balagena innawa unoth aye server details maru karanawa
    this.route.params.subscribe(
      (params: Params)=>{
        this.server = this.serversService.getServer(+params['id']);
      }
    )

  }

}
