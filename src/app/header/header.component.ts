import { Component, EventEmitter, Output } from '@angular/core'

import { DataStoregeService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private dataStorageService: DataStoregeService){}
    //@Output() featureSelected = new EventEmitter<string>();

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

}