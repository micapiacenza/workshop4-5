import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../common/classes/user.class";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 public user: User | undefined;
  // Array fo dummy data
  public users: Array<User> = [
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
  ];
  public inputEmail: string = '';
  public inputPdw: string = '';

 constructor(private router: Router) {}

  ngOnInit() {}

  public userAuth() {
   let valid = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.inputEmail && this.users[i].pwd === this.inputPdw) {
        valid = true;
        this.router.navigate(['/account']);
      }
        break;
    }
    if (valid === false) {
      alert('Error: The user entered does not match any existing user');
    }

    // Simpler form
    // if (this. users.some(e=>(e.email === this.inputEmail && e.pwd === this.inputPdw))){
    //   this.router.navigate(['/account']);
    // } else {
    //   alert('Error: The user entered does not match any existing user');
    // }
  }
}
