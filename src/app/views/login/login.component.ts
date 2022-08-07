import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 userId: string | null = '';
 userNum: number = 0;
 paramSub: any;

 constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   this.userId = this.route.snapshot.params['id'];
   // this.cnt = this.counter.IncrementCounter();
    this.paramSub = this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    })
  }
}
