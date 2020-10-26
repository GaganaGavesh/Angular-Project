import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//for server
//import { ServerComponent } from './server/server.component';
//import { ServersComponent } from './servers/servers.component';
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
import { NewAccountComponent } from './service-dependency-injection/new-account/new-account.component';
import { AccountComponent } from './service-dependency-injection/account/account.component';
import { ServicesDependencyInjectionAssignmentComponent } from './services-dependency-injection-assignment/services-dependency-injection-assignment.component';
import { ActiveUsersComponent } from './services-dependency-injection-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services-dependency-injection-assignment/inactive-users/inactive-users.component';
import { RoutingStartComponent } from './routing-start/routing-start.component';
import { HomeComponent } from './routing-start/home/home.component';
import { UsersComponent } from './routing-start/users/users.component';
import { EditServerComponent } from './routing-start/servers/edit-server/edit-server.component';
import { UserComponent } from './routing-start/users/user/user.component';
import { ServiceDependencyInjectionComponent } from './service-dependency-injection/service-dependency-injection.component';

//routing start
import { ServersComponent } from './routing-start/servers/servers.component';
import { ServerComponent } from './routing-start/servers/server/server.component';

import { AccountsService } from './service-dependency-injection/accounts.service';
import { LoggingService } from './service-dependency-injection/logging.service';
import { CounterService } from './services-dependency-injection-assignment/counter.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ServersService } from './routing-start/servers/servers.service';

//aluthen add karana component serama module eke register karanna ona ethakota thama angular eka danaganne 
//ehema component ekak thiyanawa kiyala

//routes danne approutes kiyana const ekakata,eka array ekak'rout object thama tyagena innnee
const appRouts: Routes=[
  {path:'',component: HomeComponent},//localhost:4200/
  //main route eken yana ewa tye nam ewa children routes eidiyata danna pluwan
  {path:'servers',component: ServersComponent, children:[
    {path:':id/edit',component: EditServerComponent},
    {path:':id',component: ServerComponent}//children routes load karanna wenama 
    //<router-outlet></router-outlet>ekak ona
  ]},//localhost:4200/servers
  {path:'users',component: UsersComponent, children:[
    {path:':id/:name',component: UserComponent}
  ]},//localhost:4200/users
  //{path:'users/:id/:name',component: UserComponent},
  //localhost:4200/users/something //:kiyanne dynamic ekak
];//mehema nikannma dammoth angular eka routes use karanne ne ignore karanawa
//routes register karanna ona imports wala

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
    InactiveUsersComponent,
    RoutingStartComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    UserComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
    //routing functionality eka add kalata thama eka register wela ne
    //eka karanne forRoot eken.mulu app ekatama route enable wenawa ethakota
    //forRoot eka allow karanawa routes register karanna
    //api hadapu constat appRouts eka meke register kalama app eka purama e routes wada karawanna pluwan
  ],
  providers: [AccountsService, LoggingService, CounterService, ShoppingListService, ServersService],//service ekakata service ekak inject karanawa nam
  //inject karana service eka aniwa appmodule eke tyenna onaa
  bootstrap: [AppComponent]
})
export class AppModule { }
