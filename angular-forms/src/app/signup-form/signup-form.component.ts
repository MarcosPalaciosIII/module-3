import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupInfo: any = {};

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    alert("Form Submitted!!");
  }

}
