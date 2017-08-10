import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {clearInterval, setInterval} from "timers";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output()  intervalEmmiter = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(
      ()=>{
        this.intervalEmmiter.emit(this.lastNumber+1);
        this.lastNumber++;
      }
      ,1000
    )
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
