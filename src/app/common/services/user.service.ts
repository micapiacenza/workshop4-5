import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  
  constructor() {}
}
