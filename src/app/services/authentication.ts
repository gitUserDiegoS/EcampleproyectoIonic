import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication {

	constructor(private  angularfire: AngularFireAuth) {

    }
    
    createUserWithEmailAndPassword(email, password){
        this.angularfire.auth.createUserWithEmailAndPassword(email, password);
    }

    crearUsercongoogle(){
        let provider = new  firebase.auth.GoogleAuthProvider();
        return this.angularfire.auth.signInWithRedirect(provider)
        .then(resul =>{
            return firebase.auth().getRedirectResult();
        });
    }

    

    crearUserconfacebook(){
        let provider = new  firebase.auth.FacebookAuthProvider();
        return this.angularfire.auth.signInWithRedirect(provider)
        .then(resul =>{
            return firebase.auth().getRedirectResult();
        });
    }

}