import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Obsługa funkcji ngModel w selektorach
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modul Angularfire z firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Komponenty strony
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessagesComponent } from './chatroom/messages/messages.component';
import { AddMessageComponent } from './chatroom/add-message/add-message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';

// Serwisy
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';
import { AuthGuard } from './services/guard.service';


// Routing
import { appRoutes } from './../routes';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    MessagesComponent,
    AddMessageComponent,
    LoginFormComponent,
    NavbarComponent,
    ChatComponent,
    ChatMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [
    AuthService,
    ChatService,
    AuthGuard,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
