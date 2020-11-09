import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStoregeService} from '../shared/data-storage.service';

//Meka routing module ekedi kathakarana method ekak
//Resolve is something that runs some code before a route is loaded to ensure that router depends on are there
//resolver ekak kiyanne route ekak load wenna kalin route eata adala data tyeda kiyala check karanna run wena ekak
@Injectable({providedIn: 'root'}) //Add to appModule providers automatically
export class RecipesResolverService implements Resolve<Recipe[]>{
    
    constructor(private dataStoregeService: DataStoregeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.dataStoregeService.fetchRecipies();//methana subscribe karanna ona ne resolver eken subscribe karagannawa
        //automatically
    }

}