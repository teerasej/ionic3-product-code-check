import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  startScan(){
    this.barcodeScanner.scan().then(
      (barcodeData) => {
        this.navCtrl.push('ProductInfoPage', barcodeData);
      }
      , (err) => {}
    )
  }

}
