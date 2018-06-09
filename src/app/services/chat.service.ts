import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Message {
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Pobieranie / dodawanie wiadomości
  private chatMessages: AngularFirestoreCollection<Message>;
  list: Observable<Message[]>;

  // Aktualizacja / usuwanie wiadomości
  private messageDoc: AngularFirestoreDocument<Message>;

  constructor(
    private afs: AngularFirestore,
  ) {

    this.chatMessages = afs.collection<Message>('messages');
    // snapshot.pipe odpowiedzialny za import ID
    this.list = this.chatMessages.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // Pobieranie listy
  getMessages() {
    return this.list;
  }

  // Dodawanie wiadomosci
  addMessage(message: Message) {
    this.chatMessages.add(message);
  }

  removeMessage(message) {
    this.messageDoc = this.afs.doc<Message>(`messages/${message.id}`);
    this.messageDoc.delete();
  }

  editMessage(message) {
    this.messageDoc = this.afs.doc<Message>(`messages/${message.id}`);
    this.messageDoc.update(message);
  }
}
