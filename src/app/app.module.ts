import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService} from './data.service'; //Added this
import { HttpClientModule } from '@angular/common/http'; //Added this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule	//Added this
  ],
  providers: [DataService],	//Added this 'DataService'
  bootstrap: [AppComponent]
})
export class AppModule { }
