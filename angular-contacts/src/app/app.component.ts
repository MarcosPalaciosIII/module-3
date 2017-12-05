import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Services';

  constructor(private counterThang: CounterService) {}

  ngOnInit() {
  }

  userIncrease() {
    this.counterThang.increment();
  }

  userDecrement() {
    this.counterThang.decrement();
  }
}
