import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/views/login/login.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bar-component',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  title = 'Workshop 4';
  isUserLoggedIn: boolean = false;

  constructor(private userService: UserService) {
  }

  getUserLoggedIn() {
    this.isUserLoggedIn = this.userService.isUserLoggedInSubject.value;
    return this.isUserLoggedIn;
  }
}
