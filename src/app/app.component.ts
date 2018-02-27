import { Component } from '@angular/core';
import { DataService } from './data.service'; // Added this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  cryptos: any;

  //  title = 'app'; this is removed for brevity

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        //console.log(res);
      });

      // Then, we're using the ngOnInit() lifecycle hook, which is executed when the component loads, to call the getPrices() function in the DataService.
      // We're binding the response res to this.cryptos.
  }
}

// objectKeys is a property that's defined as javascript Object.keys. This is necessary because the response from CryptoCompare is composed of an object, as opposed to an array.
// cryptos will hold our cryptocurrency data.