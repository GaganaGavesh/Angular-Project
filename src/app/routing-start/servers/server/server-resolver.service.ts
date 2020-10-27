import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';

export interface Server{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ):Observable<Server> | Promise<Server> | Server {
            return this.serversService.getServer(+route.params['id']);
    }//code eka hari yanawa observable walata promise walata server walata
}