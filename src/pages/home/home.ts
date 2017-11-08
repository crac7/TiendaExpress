import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private facebook: Facebook) {

  }
  login(){
    this.facebook.login(['email']).then((loginResponse)=>{
   	 let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
   	 firebase.auth().signInWithCredential(credential).then((info)=>{
   	 	alert(JSON.stringify(info));
   	 })
   })
  }
}
