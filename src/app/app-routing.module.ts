import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './routing-start/page-not-found/page-not-found.component';
import { UserComponent } from './routing-start/users/user/user.component';
import { UsersComponent } from './routing-start/users/users.component';
import { ServersComponent } from './routing-start/servers/servers.component';
import { ServerComponent } from './routing-start/servers/server/server.component';
import { EditServerComponent } from './routing-start/servers/edit-server/edit-server.component';
import { HomeComponent } from './routing-start/home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing-start/servers/edit-server/can-deactivate-guard.service';

const appRouts: Routes=[
    {path:'',component: HomeComponent},//localhost:4200/
    //main route eken yana ewa tye nam ewa children routes eidiyata danna pluwan
    {path:'servers', 
    //canActivate: [AuthGuard],//meka child routes walata danawa nam e dana eka witharak protect wenawa gurd class eka ekata wada karanawa
    canActivateChild: [AuthGuard],//child routes witharai protect wenne
    component: ServersComponent, 
    children:[
      {path:':id/edit',component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},//Angular me guard eka run karanawa api me component eka leave wenna yanakota
      {path:':id',component: ServerComponent}//children routes load karanna wenama 
      //<router-outlet></router-outlet>ekak ona
    ]},//localhost:4200/servers
    {path:'users',component: UsersComponent, children:[
      {path:':id/:name',component: UserComponent}
    ]},//localhost:4200/users
    //{path:'users/:id/:name',component: UserComponent},
    //localhost:4200/users/something //:kiyanne dynamic ekak
    {path:'not-found',component: PageNotFoundComponent},
    {path:'**', redirectTo: '/not-found'},//component ekak load karanne nathuwa route ekakata re direct karanawa
    // ** dammama all false routes allagannnawa ewa not found ekata redirect karanawa
    //me route eka aniw antimatama thama enna ona//udinma dala thibboth meka issella run wela wena eka page ekakatawath yanna bari wenawa
  ];//mehema nikannma dammoth angular eka routes use karanne ne ignore karanawa
  //routes register karanna ona imports wala
  

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
    ],
    exports: [RouterModule]//router module ekata me appRouts tika load kara eka dan aye export karanawa
    //dan api AppRoutingModule eka import karana ona thanaka meken export karana ona ekak eke use karanna pluwn

})
export class AppRoutingModule{

}