import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {

  form: FormGroup;
  firstName: string;
  lastName: string;
  date: string;
  time: string;
  telephone: string;
  email: string;

  constructor() {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  buttonClear() {
    this.firstName = '';
    this.lastName = '';
    this.date = '';
    this.time = '';
    this.email = '';
    this.telephone = '';
  }

}
