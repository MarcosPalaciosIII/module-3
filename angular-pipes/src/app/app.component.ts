import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipes';

  // this is connected to user input with ngModel
  userText: string = "Blah Blah Blah. I don't say Blah Blah Blah!!";
}
