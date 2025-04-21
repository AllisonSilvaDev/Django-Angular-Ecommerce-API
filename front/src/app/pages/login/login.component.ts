import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    userName: "",
    password: ""
  }

  constructor(private router: Router){}

  onLogin(){
    if (this.loginObj.userName == "admin" && this.loginObj.password == "1234") {
      this.router.navigateByUrl('/')
    }
  }
}
