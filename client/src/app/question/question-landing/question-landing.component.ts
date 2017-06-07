import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Question } from './../question';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-question-landing',
  templateUrl: './question-landing.component.html',
  styleUrls: ['./question-landing.component.css']
})
export class QuestionLandingComponent implements OnInit {
temp: any
score : any

  constructor(private _questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.score = this._questionService.getScope()
    this._questionService.setScope(0)
  }
  redirect(pagename: string) {
    this.router.navigateByUrl('/'+pagename)
  }

  logout_function(){
    this._questionService.logout()
    .then(()=>{
      console.log("bye bye")
      this.redirect("login")
    })
  }

}
