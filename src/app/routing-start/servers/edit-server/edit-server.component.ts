import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  //route details ganna ona nam route eka inject karanna ona(ActivatedRoute)
  constructor(
    private serversService: ServersService, 
    private route: ActivatedRoute, 
    private router: Router,) { }

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
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to Discard the changes');
    }else{
      return true;
    }
  }

}
