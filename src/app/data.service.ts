import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';	//Added this
import 'rxjs/add/operator/map';	//Added this

//Lines 2 and 3 above are necessary for making the API call, and the map operator helps us retrieve the response.

@Injectable()
export class DataService {

	result:any;

  constructor(private _http: HttpClient) { }

  getPrices(){
  	return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
  	.map(result => this.result = result);
  }
}
