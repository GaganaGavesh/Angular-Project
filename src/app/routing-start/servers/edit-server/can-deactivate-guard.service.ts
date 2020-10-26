import { ActivatedRouteSnapshot, CanDeactivate, RouterEvent, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

//interface is a contract which can be imported by some other classes which forces that classes to provide it some logic
export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; //meka thama me method eke type eka
    //meka tyenna ona kohomad kiyala 
    //observable ekak or peomise ekak or boolean ekak return karanawa
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
        {
            return component.canDeactivate();
            //canDeactivate eka current inna component ekata activate karanawa
            //leave wenna allow da nadda kiyala balane meken
        }
}