import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  constructor(private userService: UserService){}

  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;
}
