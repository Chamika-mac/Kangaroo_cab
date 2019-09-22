import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form: FormGroup;
  fname: string;
  lname: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  buttonClear() {
    this.ngOnInit();
  }

}
