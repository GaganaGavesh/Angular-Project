import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, 
    CanActivate, 
    Router, 
    RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService: AuthService, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean)=>{
                    if(authenticated){
                        return true;
                    }else{
                        this.router.navigate(['/']);//authenticated nathnam yanna ona path eka
                    }
                }
            )
            }//me auth guard service eka routing eke dala tynne, ethakita me AuthGuard eken log wela kiala return kalama thama 
            //me rourte eke dala tyna component and child component roures enable karanne
        //path:'servers', canActivate: [AuthGuard],component: ServersComponent, children:[
        //{path:':id/edit',component: EditServerComponent},
        //{path:':id',component: ServerComponent}
}
