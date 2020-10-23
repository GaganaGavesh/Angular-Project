import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  existingAccountServiceChange = 'in existing Account';

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //this.loggingService.logStatusChange(status);
    this.accountsService.updateAccountStatus(this.id,status);
    //const service = new LoggingService(status,this.existingAccountServiceChange);

    //service.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
    //console.log(this.id);
  }


}
