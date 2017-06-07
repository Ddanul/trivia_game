import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';
import { User } from './../login/user';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  new_question = new Question
  all_questions: Question[]
  curr_user= new User


  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.get_all_questions()

    this.check_status()
  }

  add_question(){
    console.log("adding question", this.new_question)
    this._questionService.add_question(this.new_question)
    .then(()=> {
      console.log("added")
      this.get_all_questions()
    })
  }

  get_all_questions(){
    this._questionService.get_all_questions()
    .then((data)=>{this.all_questions = data})
    .catch((err)=>{ console.log("err", err)})
  }

  check_status(){
    console.log("checking_status")
    this._questionService.check_status()
    .then(data => {
      console.log("*check status*", data.user)
      if(data.user){
        this.curr_user = data.user.name
        console.log(this.curr_user)
      }
    })
  }



}
