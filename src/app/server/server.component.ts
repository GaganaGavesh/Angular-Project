import { Component } from '@angular/core';
 
@Component({
    selector : 'app-server',//meka unique wenna ona aniwaryen
    templateUrl : './server.component.html',
    styles : [`
        .online {
            color: white;
        }
        .offline {
            color: yellow;
        }
    `]//multuiple line nisa thama mehema dala tynnee
    //styleUrls : ['./server.component.css']
})
export class ServerComponent{

    serverId : number = Math.floor(Math.random()*100);
    serverStatus : string = 'Offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'; 
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        // if (this.serverStatus == 'Online')
        //     return 'green';
        // else
        //     return 'red';

        return this.serverStatus === 'Online' ? 'green' : 'red'

        //meka turnary expression ekak check karana nisa thama === dala thiyenne 
    }
}