import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logginig.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // Ne pas rajouter ", AccountService" ici car sinon ça override celle qui vient du AppComponent
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService : LoggingService, private accountService : AccountService){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateAccount(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdates.emit(status);
  }
}
