import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { IndexpageComponent } from '../components/indexpage/indexpage.component';
export const routes: Routes = [
    {
        path:'',redirectTo:'/indexpage',pathMatch:'full'
    },
    {
      path:'login',component:LoginComponent   },
   {
    path:'indexpage',component:IndexpageComponent
   },
   { 
    path: 'profile', component: ProfileComponent
   },  // Define profile route
  { 
    path: '**', redirectTo: '/indexpage'
  }  //for any unknown route redirect to login
   
];
