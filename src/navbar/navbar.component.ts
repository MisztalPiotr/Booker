import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; // Import the 'firebase/app' module

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


    user: firebase.default.User | null;

    constructor(public afAuth: AngularFireAuth) {
        
      afAuth.authState.subscribe(user => {
        this.user = user;
      });
    }
    ngOnInit(): void {
        
    }

    logout(): void {
        this.afAuth.signOut();
    }

  
}
