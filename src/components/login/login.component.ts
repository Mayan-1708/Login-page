import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl:'./login.component.html',
  styleUrls : ['./login.component.css']
})
export class LoginComponent {

  signUpMessage: string ='';
  profilepicMessage:string='';

   signUpData={
    username:'',
    email:'',
    password:'',
    dob:null,
    gender:'',
    country:'',
    phone:'',
    profilePicture: '',
    terms:false
  }
  
constructor(private router: Router){}

onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.signUpData.profilePicture = URL.createObjectURL(file);
  }
}

onSignup(){
  const loggedUser=this.signUpData.username;
  localStorage.setItem('loggedUser', JSON.stringify(this.signUpData));
  this.signUpMessage = 'Sign up successful. Please login.';
}
}


