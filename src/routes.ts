import { Routes } from '@angular/router';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { ChatComponent } from'./app/chat/chat.component';
import { AuthGuard } from './app/services/guard.service';

export const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'notes', component: ChatroomComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];