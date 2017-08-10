import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  secretMessage = false;
  log = [];

  onToggleMessage(){
    this.secretMessage = !this.secretMessage;
    this.log.push(this.log.length + 1);
  }
}
