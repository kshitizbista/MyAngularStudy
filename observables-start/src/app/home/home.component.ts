import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  myNumberSubscription: Subscription;
  myObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
      }
    );
    this.myNumberSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => { observer.next('first package'); }, 2000);
        setTimeout(() => {observer.next('second package'); }, 4000);
        setTimeout(() => {observer.complete(); }, 6000);
        setTimeout(() => {observer.error('this is error'); }, 7000);
      }
    );

   this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.myNumberSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }

}
