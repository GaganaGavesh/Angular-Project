import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = true;

  //route details ganna ona nam route eka inject karanna ona(ActivatedRoute)
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    //snapshot eken current route eke snapshot ekak ganna pluwan
    console.log('Qparams' + this.route.snapshot.queryParams);
    console.log('Fragment' + this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;//allowEdit eka true false wenawa 
        //allow edit ekata tyna value eka anuwa
        console.log(queryParams['allowEdit']);
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
