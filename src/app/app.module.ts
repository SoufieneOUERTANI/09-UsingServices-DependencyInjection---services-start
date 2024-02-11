import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './accounts.service';
import { LoggingService } from './logginig.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // The whole application is now having the same instance,
  // unless it is overwritten in a child by declaring providers: [AccountService] at the child  
  // This allows also to inject a service in an other service, 
  // which only possible at the app level, not at the component level
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
