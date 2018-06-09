import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Smalltalk';
  messages: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.messages = db.collection('messages').valueChanges();
  }
}
