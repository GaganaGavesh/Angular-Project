import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStoregeService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStoregeService, private authService: AuthService){}
    //@Output() featureSelected = new EventEmitter<string>();

    ngOnInit(){
        //methana api karanne,api auth eke hadala tyna user subject eken user kenek create una gaman,
        //methana api subsctibe karala tyna nisa apita e datra tika ganna ahaki

        //me wage subscribe karana ewa api unsubscribe karaganna ona 
        //memory leaks ekema nawathinawa ethakota
        //meken emit karanawa user object ekak
        this.userSub = this.authService.user.subscribe(user=>{
            this.isAuthenticated = !user ? false : true;
            //this.isAuthenticated = !!user;
            console.log("user "+ user);
        })
        
    }

    onClickFeature(feature: string){
        //this.featureSelected.emit(feature);
    }

    //fires the firebase request 
    onSavedata(){
        this.dataStorageService.storeRecipies();

    }

    //fires the firebase request 
    onFetchdata(){
        this.dataStorageService.fetchRecipies().subscribe();
    }

    ngOnDestroy(){
        //userSub will be unsubscribed
        this.userSub.unsubscribe();
    }
}