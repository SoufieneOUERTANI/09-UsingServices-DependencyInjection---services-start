import { Component } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // provider principal de l'instance de "AccountService", déclarer le provider juste ici
  providers: [AccountService]
})
export class AppComponent {

  accounts : {name : string, status : string} [] = [];

  constructor(private accountService : AccountService){}

  // ngOnInit seulement dans le provider
  ngOnInit(){
    this.accounts = this.accountService.accounts;
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

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

}
