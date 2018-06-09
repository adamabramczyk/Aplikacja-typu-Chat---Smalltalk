import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input('message') message;
  @Input('authorId') authorId;
  @Input('isLast') isLast;

  ngOnInit() {
    console.log(this.isLast);
  }
}