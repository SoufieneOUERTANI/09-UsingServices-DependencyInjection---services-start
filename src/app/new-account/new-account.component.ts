import { Component} from '@angular/core';
import { LoggingService } from '../logginig.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Ne pas rajouter ", AccountService" ici car sinon ça override celle qui vient du AppComponent
  // providers:[LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService : LoggingService, private accountService : AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
