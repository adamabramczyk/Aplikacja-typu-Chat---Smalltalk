import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { connect } from 'socket.io-client';
import { authorId } from './app.config';

export interface Message {
  authorId: string;
  text: string;
  timestamp: number;
}
interface IncommingMessage extends Message {
  id: string;
}

@Component({
  selector: 'my-chat-app',
  templateUrl: './chat.component.html',
  styleUrls: [
    './chat.component.css',
  ]
})
export class ChatComponent implements OnInit {

  private static URL = 'https://socket-chat-server-zbqlbrimfj.now.sh';

  @ViewChild('texarea') textarea: ElementRef;
  @ViewChild('container') container: ElementRef;

  public isMinimized = false;

  public messages: Message[] = [];
  public authorId = authorId;
  private socket;

  public onInput($event: KeyboardEvent) {
    if ($event.which === 13 && !$event.shiftKey) {
      $event.preventDefault();
      this.sendMessage();
    }
  }

  public toggle() {
    this.isMinimized = !this.isMinimized;
  }


  public sendMessage() {
    const text = this.textarea.nativeElement.value.trim();
    if (text.length > 0) {
      const message = {
        authorId: this.authorId,
        text: text,
        timestamp: Date.now(),
      };

      this.messages.push(message);
      this.socket.emit('chat message', message);
      this.textarea.nativeElement.value = '';
      this.updateScoll();
      event.preventDefault();
    }
  }

  public ngOnInit() {
    this.socket = connect(ChatComponent.URL, {
      transports: ['websocket'], reconnection: true
    });

    this.socket.on('chat message', (message: IncommingMessage) => {
      if (message.authorId !== this.authorId) {
        this.messages.push(message);
      }
    });
  }

  private updateScoll() {
    setTimeout(() => {
      const container: HTMLDivElement = this.container.nativeElement;
      container.scrollTop = container.scrollHeight;

      const textarea: HTMLTextAreaElement = this.textarea.nativeElement;
    }, 0)
  }

  scrollToBottom(): void {
    this.container.nativeElement.scrollTop
      = this.container.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  removeMessage(i: number): void {
    this.messages.splice(i, 1);
  }

}