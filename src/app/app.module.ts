import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignmet24Component } from './assignmet24/assignmet24.component';
import { Assignment32Component } from './assignment32/assignment32.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CrossComponentComponent } from './cross-component/cross-component.component';
import { CockpitComponent } from './cross-component/cockpit/cockpit.component';
import { ServerElementComponent } from './cross-component/server-element/server-element.component';
import { OddComponent } from './optionalassignment/odd/odd.component';
import { EvenComponent } from './optionalassignment/even/even.component';
import { OptionalassignmentComponent } from './optionalassignment/optionalassignment.component';
import { GameControlComponent } from './optionalassignment/game-control/game-control.component';
import { NgforandnfifrecapComponent } from './ngforandnfifrecap/ngforandnfifrecap.component';
import { BasichighlightDirective } from './ngforandnfifrecap/basic-highlight/basic-highlight.directive';
//api angular ekata kiyanna ona directive ekak haduwa kiyala[declarations] wala dannona and import karanna ona
import { NgclassandngstylerecapComponent } from './ngclassandngstylerecap/ngclassandngstylerecap.component';
import { BetterHighlightDirective } from './ngforandnfifrecap/better-highlight/better-highlight.directive';
import { UnlessDirective } from './ngforandnfifrecap/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServiceDependencyInjectionComponent } from './service-dependency-injection/service-dependency-injection.component';
import { AccountComponent } from './service-dependency-injection/account/account.component';
import { NewAccountComponent } from './service-dependency-injection/new-account/new-account.component';
import { AccountsService } from './service-dependency-injection/accounts.service';
import { LoggingService } from './service-dependency-injection/logging.service';
import { ServicesDependencyInjectionAssignmentComponent } from './services-dependency-injection-assignment/services-dependency-injection-assignment.component';
import { ActiveUsersComponent } from './services-dependency-injection-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services-dependency-injection-assignment/inactive-users/inactive-users.component';
import { CounterService } from './services-dependency-injection-assignment/counter.service';
//aluthen add karana component serama module eke register karanna ona ethakota thama angular eka danaganne 
//ehema component ekak thiyanawa kiyala
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignmet24Component,
    Assignment32Component,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CrossComponentComponent,
    CockpitComponent,
    ServerElementComponent,
    OddComponent,
    EvenComponent,
    OptionalassignmentComponent,
    GameControlComponent,
    NgforandnfifrecapComponent,
    BasichighlightDirective, //api angular ekata kiyanna ona directive ekak haduwa kiyala
    NgclassandngstylerecapComponent, //manually kiyanna ona meka tyna thana import ekak widiyata
    BetterHighlightDirective, 
    UnlessDirective,
    DropdownDirective,
    ServiceDependencyInjectionComponent,
    AccountComponent,
    NewAccountComponent,
    ServicesDependencyInjectionAssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountsService, LoggingService, CounterService],//service ekakata service ekak inject karanawa nam
  //inject karana service eka aniwa appmodule eke tyenna onaa
  bootstrap: [AppComponent]
})
export class AppModule { }
