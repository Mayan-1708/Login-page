import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteConfigLoadEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-indexpage',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './indexpage.component.html',
  styleUrl: './indexpage.component.css'
})

export class IndexpageComponent {


  loginMessage: string = '';
  loginFailed: boolean = false;
  loginDone: boolean = false;

  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
     const storedData = localStorage.getItem('loggedUser');
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.password === this.loginData.password && userData.username === this.loginData.username) {
        this.loginDone = true;
        this.router.navigate(['/profile']);
        // Redirect to the home page or dashboard
        
      } else {
        this.loginFailed = true;
      }
    } else {
      this.loginFailed = true;
    }
  }

}
