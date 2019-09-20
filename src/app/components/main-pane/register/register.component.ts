import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmpassword :String=''


  emailex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nicex=/^[0-9]{9}[x|X|v|V]$/;
  nicexx=/^[0-9]{12}$/;

  user:User={
    
    fname:'',
    lname: '',
    username:'',
    password: '',
    email: '',
    
    address: '',
    hometown: '',
    gender:'',
    mobile: '',
    land: '',
    regdate:'',
    ty: '',
    nic: '',
  }

  constructor(private router:Router ,  private toastr: ToastrService,) { }

  ngOnInit() {
    this.user={
    
      fname:'',
      lname: '',
      username:'',
      password: '',
      email: '',
     
      address: '',
      mobile: '',
      land: '',
      ty: '',
      hometown: '',
      gender: '',
      regdate:'',
      nic: '',
    }
  }

  async adduser(){

    this.user.regdate= new Date()
    debugger
    console.log(this.user)
    if(this.user.fname==''){
      console.log('first name cannot be empty')
      this.toastr.error("first name cannot be empty")
    }
    else if (this.user.lname==''){
      console.log('last name cannot be empty')
      this.toastr.error("Last name cannot be empty")
    }
    else if(this.user.nic==''){
      console.log('nic cannot be empty')
      this.toastr.error("NIC cannot be empty")
    
    }
    else if(!this.nicex.test(this.user.nic)){
      console.log('nic cannot be empty')
      this.toastr.error("Enter a valid NIC number")
    }
    
    

    else if(this.user.hometown==''){
      console.log('hometown cannot be empty')
      this.toastr.error("Hometown cannot be empty")
    
    }
    
    else if(this.user.email==''){
      console.log('email cannot be empty')
      this.toastr.error("E-mail cannot be empty")
    }
    else if(!this.emailex.test(this.user.email)){
      console.log('email cannot be empty')
      this.toastr.error("Enter a valid E-mail")
    }
    else if(this.user.username==''){
      console.log('username cannot be empty')
      this.toastr.error("Username cannot be empty")
    }
    else if(this.user.gender==''){
      console.log('phone number cannot be empty')
      this.toastr.error("please select the gender")
    }
    
    else if(this.user.password==''){
      console.log('You must enter a password to proceed')
      this.toastr.error("Password cannot be empty")
    }
    else if(this.user.password!=this.confirmpassword){
      console.log('password did not match')
      this.toastr.error("password did not match")
    }
    
    else if(this.user.mobile==''){
      console.log('phone number cannot be empty')
      this.toastr.error("Mobile number cannot be empty")
    }
    else if(this.user.land==''){
      console.log('phone number cannot be empty')
      this.toastr.error("Land number cannot be empty")
    }
    else if(this.user.address==''){
      console.log('Address cannot be empty')
      this.toastr.error("Address cannot be empty")
    }
 

    else if(this.user.ty==''){
      console.log('phone number cannot be empty')
      this.toastr.error("please select your register type")
    }
    
    
    else{
      
          this.toastr.success("User register successfuly")
          
          this.ngOnInit()

        
      
     
     
    }



    ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    



  }

}
