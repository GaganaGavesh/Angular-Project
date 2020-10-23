import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = false;
  serverName = 'Test Server 1';
  serverCreated = false;
  servers = ['test1','test2'];
  serverExist = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true; 

    for(let x = 0 ; x<this.servers.length;x++)
    {
      if(this.servers[x] == this.serverName)
      {
        this.serverExist = true;
        return;
      }
      else
        this.serverExist = false;
    }
    this.servers.push(this.serverName);
    console.log(this.servers);
  }

  onUpdateServerName(event : any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
