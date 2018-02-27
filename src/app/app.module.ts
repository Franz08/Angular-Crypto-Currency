import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService} from './data.service'; //Added this
import { HttpClientModule } from '@angular/common/http'; //Added this


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule	//Added this
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],	//Added this 'DataService'
  bootstrap: [AppComponent]
})
export class AppModule { }
