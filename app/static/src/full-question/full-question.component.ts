import { Component, OnInit } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { RouteParams } from 'angular2/router';
import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UserService } from '../shared/services/user/user.service';
import { QuestionService } from '../shared/services/question/question.service';

@Component({
  selector: 'full-question',
  templateUrl: 'static/src/full-question/full-question.component.html',
  styleUrls: ['static/src/full-question/full-question.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton]
})

export class FullQuestionComponent implements OnInit {
  title = "Question";
  model = {
    answer: "",
    qid: "",
    uid: ""
  };
  question;
  
  constructor(private _routeParams: RouteParams, private _questionService: QuestionService) {
    
  }

  ngOnInit() {
    this.qId = +this._routeParams.get('qId');
    this.model.qid = this.qId;
    this._questionService.getQuestionInformation(this.qId).subscribe(
      question => {console.log(question);this.question = question;this.model.uid = question[0].qid.uid.uid},
      err      => {console.log(err);}
    );
  }
  
  onSubmit() {
    this._questionService.postAnswer(this.model).subscribe(
      done => {
        console.log(done);
        location.reload();
        
      },
      err => {console.log(err);}
    );
    
    console.log("test");
  }
}
