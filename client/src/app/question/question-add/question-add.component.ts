import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Question } from './../question';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
new_question = new Question
curr_user: string

  constructor(private _questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.check_status()
  }

  redirect(pagename: string) {
    this.router.navigateByUrl('/'+pagename);
  }

  add_question(){
    console.log("adding question", this.new_question)
    this._questionService.add_question(this.new_question)
    .then(()=> {
      console.log("added")
      this.redirect('question/landing')
    })
  }

  check_status(){
    this._questionService.check_status()
    .then(data => {
      if(data.user){
        this.curr_user = data.user.name
      }
      else{
        this.redirect('login')
      }
    })
  }

}
