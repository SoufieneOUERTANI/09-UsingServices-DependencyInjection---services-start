import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logginig.service";

// This decorator is needed because we are injecting an  other service to this service 
@Injectable()
export class AccountService {

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

    statusUpdates = new EventEmitter<string>();

    constructor(private loggingService : LoggingService){}

    addAccount(name : string, status : string){
        this.accounts.push({ name : name, status : status});
        this.loggingService.logStatusChange(status);
    }
    updateAccount(id : number, status : string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);        
    }
}