import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexpageComponent } from '../indexpage/indexpage.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, IndexpageComponent, ProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData: any;
  constructor() {
    const currentUser = localStorage.getItem('loggedUser');
    if (currentUser) {
      this.userData = JSON.parse(currentUser);
    }
  }
}