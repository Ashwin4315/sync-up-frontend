import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../login/authService.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user:{
    username:string,
    email:string,
    password:string
  }

  isLoading=false;

  constructor(private authService:AuthService,private router :Router){}

  onCreateUser(userData:NgForm){
     if(!userData.valid){
      alert("Enter valid data")
      return
     }

     this.user={...userData.value}
     userData.reset()
    
     this.isLoading=true;
     this.authService.signup(this.user).subscribe((data)=>{
      this.isLoading=false
      console.log(data)
      this.router.navigate(["./"])
     })
  }
}
