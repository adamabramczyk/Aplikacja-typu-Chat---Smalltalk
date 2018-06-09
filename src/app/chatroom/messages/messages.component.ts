import { Component, OnInit } from '@angular/core';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Lista wiadomości
  list: any;
  // Edycja wiadomości
  editedMessage: any = {
  name: '',
  }

  constructor(private chatConnect: ChatService) {
    this.chatConnect.getMessages().subscribe(message => {
      this.list = message;
      console.log(this.list);
    })
  }

  ngOnInit() {
  }

  delete(message){
    this.chatConnect.removeMessage(message);
  }

  edit(message){
    this.editedMessage = message;
  }

  sendEditedMessage(){
    this.chatConnect.editMessage(this.editedMessage)
  }
}
