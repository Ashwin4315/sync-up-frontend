import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:{
    email:string,
    password:string
  }

  isLoading=false;

  constructor(private authService:AuthService,private router :Router){}

  onLoginUser(userData:NgForm){
     if(!userData.valid){
      alert("Enter valid data")
      return
     }

     this.user={...userData.value}
     userData.reset()
    
     this.isLoading=true;
     this.authService.signin(this.user).subscribe((data)=>{
      this.isLoading=false
      console.log(data)
      this.router.navigate(["./"])
     })
  }
}
