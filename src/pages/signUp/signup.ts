import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Authentication } from '../../app/services/authentication';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string ="diego1853@gmail.com";
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private angularFire : Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount(){
   // this.angularFire.auth.createUserWithEmailAndPassword(this.email, this.password);
    this.angularFire.createUserWithEmailAndPassword(this.email, this.password);
  }

  createAccountgoogle(){
    this.angularFire.crearUsercongoogle();
  }

  createAccountfacebook(){
    this.angularFire.crearUserconfacebook();
  }

}
