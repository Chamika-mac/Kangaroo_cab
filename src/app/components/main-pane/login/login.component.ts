import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  buttonClear() {
    this.ngOnInit();
    this.username = '';
    this.password = '';
  }

}
