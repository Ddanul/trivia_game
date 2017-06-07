import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from './../question.service';
import { Routes, Router } from '@angular/router';
import { Question } from './../question';
import { Answer } from './../answer';

@Component({
  selector: 'app-question-home',
  templateUrl: './question-home.component.html',
  styleUrls: ['./question-home.component.css']
})
export class QuestionHomeComponent implements OnInit {
@Output() logout = new EventEmitter
all_questions: Question[]
test_questions = []
test_answers = new Answer
curr_user: string


  constructor(private _questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.get_all_questions()
    this.check_status()
  }

  redirect(pagename: string) {
    this.router.navigateByUrl('/'+pagename);
  }

  logout_function(){
    this._questionService.logout()
    .then(()=>{
      console.log("bye bye")
      this.redirect("login")
    })
  }

  get_all_questions(){
    this._questionService.get_all_questions()
    .then((data)=>{this.all_questions = data
    console.log("These are the sample questions!!!", this.all_questions)
    this.shuffle(this.all_questions)})
    .catch((err)=>{ console.log("err", err)})
  }

  shuffle(questions: Question[]){
    for( let quest of questions){
      var new_question= []
      new_question.push(quest.question)
      new_question.push(quest.correct)
      new_question.push(quest.fake1)
      new_question.push(quest.fake2)
      var idx
      for(let i = new_question.length-1; i>0; i--){
        idx = Math.floor(Math.random()*3)+1
        let temp = new_question[i]
        new_question[i] = new_question[idx]
        new_question[idx] = temp
      }
      this.test_questions.push(new_question)
    }
    console.log("Test Questions***", this.test_questions)
  }

  check_status(){
    this._questionService.check_status()
    .then(data => {
      if(data.user){
        this.curr_user = data.user.name
      }
    })
  }

  grade_test(form : NgForm){
    let score = 0
    console.log("answers submitted***", form.value)
    for(let question of this.all_questions){
      for(var i=0; i<3; i++){
        if(question.correct == form.value[i]){
          score++;
        }
      }
    }
    if(score == 0){
      this._questionService.setScope("zero")
    }
    else{
      this._questionService.setScope(score)
    }
    this.redirect("question/landing")
  }
}
