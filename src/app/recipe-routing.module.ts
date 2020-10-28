import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],//router module eke approutes register karala tynne

    exports: [RouterModule]//eka me class eka import karana ona ekakin ganna pluwn export karala tyna nisa
})
export class RecipeRouting{

}