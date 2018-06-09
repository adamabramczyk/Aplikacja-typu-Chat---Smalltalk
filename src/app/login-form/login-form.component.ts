import { Component, OnInit  } from '@angular/core';
import { AuthService } from './../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // Publiczny komponent aby można go użyćw html
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
