import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  new_user= new User
  curr_user: string

  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.check_status()
  }
redirect(pagename: string) {
  this.router.navigateByUrl('/'+pagename);
}

login_function(){
  console.log("login component", this.new_user)
  this._loginService.login(this.new_user)
  .then(()=>{
    console.log("logged in")
    this.check_status()
    // this.redirect('question/landing')
  })
}

check_status(){
  console.log("checking_status")
  this._loginService.check_status()
  .then(data => {
    console.log("*check status*", data.user)
    if(data.user){
      this.curr_user = data.user.name
      this.redirect('question/landing')
      console.log(this.curr_user)
    }
  })
}

logout_function(){
  console.log("logging out")
  this._loginService.logout()
  .then(()=>{
    console.log("bye bye")
    this.check_status()
  })
}

}
