import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-service-dependency-injection',
  templateUrl: './service-dependency-injection.component.html',
  styleUrls: ['./service-dependency-injection.component.css'],
  providers: []
})
export class ServiceDependencyInjectionComponent implements OnInit{

  //empty array ekak instantiate karala tynawa
  accounts: {name: String, status: String}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(){
    //service eken accounts tika component eke array ekata dagannawa
    this.accounts = this.accountsService.accounts;
  }

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }


}
