import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onInterval(number: number){
    console.log(number);
    if(number % 2 === 0){
      this.evenNumber.push(number);
    }else{
      this.oddNumber.push(number);
    }
  }
}
