import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
  //methenta AccountsService service eka danna ona ne mko apit ona ekama instance ekak
  //e ona eka parent component eke tyna nisa methana danna ona ne
  //e instance ekama thama methanatath ganne 
  //*providers means we tell angular how to create it
  //prviders array eke provide karanna ona ewage type eka danne
})
export class NewAccountComponent implements OnInit {
  //dependency injection karanakota component eka depend wena class eke instance ekak component eke 
  //constructor ekata denna ona
  //meka dunnama angular eka dannawa ona mokadda kiyala 
  //habai ganna ona kohomada kiyalaa @component eke dana ona*
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

   }

  ngOnInit(): void {
  }
  //newAccountServiceChange = 'in new Account';
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
      
    // });
    //this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName,accountStatus);
    //const service = new LoggingService(status,this.newAccountServiceChange);

    //console.log('A server status changed, new status: ' + accountStatus);
  }


}
