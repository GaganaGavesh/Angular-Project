import { Inject, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()//monawa hari inject karaganna expect karanawa nam @injectable meta data eka dannama ona
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){}

      addAccount(name: string, status: string){
        this.accounts.push({name: name,status: status});
        this.loggingService.logStatusChange(status);
      }
      updateAccountStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}