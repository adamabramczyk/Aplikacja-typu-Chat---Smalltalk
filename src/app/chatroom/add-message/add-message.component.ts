import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})


export class AddMessageComponent implements OnInit {
  message: any = {
    name: '',
  };

  constructor(private messageConnect: ChatService) { }

  ngOnInit() {
  }

  send(){
    this.messageConnect.addMessage(this.message);
    this.message.name = '';
  }
}
