import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  fname: string;
  lname: string;
  nic: string;
  hometown: string;
  username: string;
  gender1: string;
  gender2: string;
  gender3: string;
  email: string;
  password1: string;
  password2: string;
  mobile: string;
  lanphone: string;

  constructor() {

  }

  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      nic: new FormControl(null, Validators.required),
      hometown: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      gender1: new FormControl(null, Validators.required),
      gender2: new FormControl(null, Validators.required),
      gender3: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      lanphone: new FormControl(null, Validators.required)
    })
  }

  buttonClear() {
    this.ngOnInit();
  }







}
