import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  productName;
  code;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public productProvider: ProductProvider
    , public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductInfoPage');


    let barcodeData = this.navParams.data;
    if (barcodeData) {
      this.productProvider.searchProduct(barcodeData.text)
        .subscribe(
        (data) => {

          console.log(data);

          this.productName = data[0].name;
          this.code = data[0].code;
        }
        , (error) => { alert(error.message) }
        )
    }
  }

}
