import { Component, OnInit } from '@angular/core';
import { TaskService} from './../task.service';
import { Router } from '@angular/router';
import { User } from './../user'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject = {
    email: '',
    password: '',
  }

  user = new User();
  // alert = false
 

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
   
  }

  Login() {
    
    console.log("login1" )
    this._taskservice.login(this.loginObject, navigate => {
      console.log("login2", this.loginObject )
      this._router.navigate(['/browse'])
    }, alerting => {
      alert("Invalid Login details!")
    });

  }

  Register() {
    this._taskservice.checkUser(this.user, data => {
      this._router.navigate(['/browse'])
    }, alerting => {
      alert("this email already exist")
    
    })
    
  }

}
