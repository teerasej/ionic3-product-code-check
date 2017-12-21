import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  baseUrl = "http://www.teerasej.com/api/product-barcode"

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  searchProduct(barcode){

    let json = {
      "barcode": barcode
    };

    return this.http.post(this.baseUrl + '/find.php', json);
  }

}
