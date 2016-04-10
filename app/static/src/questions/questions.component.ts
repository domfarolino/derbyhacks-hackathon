import { Component, OnInit } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { QuestionComponent } from '../questions/question/question.component';
import { QuestionService } from '../shared/services/question/question.service';

@Component({
  selector: 'questions',
  templateUrl: 'static/src/questions/questions.component.html',
  styleUrls: ['static/src/questions/questions.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton, QuestionComponent]
})

export class QuestionsComponent implements OnInit{
  title = "Courses";
  questions = [];
  model = {
    question: "",
    questionTitle: "",
    uid: "2",
    p_to_c_id: "1"
  };
  
  constructor(private _routeParams: RouteParams, private _router: Router, private _questionService: QuestionService) {
    
  }
  
  navigateToQuestion(qId: number) {
    this._router.navigate( ['FullQuestion', { qId: qId }] );
  }
  
  ngOnInit() {
    this.fieldId = +this._routeParams.get('fieldId');
    this.courseId = +this._routeParams.get('courseId');
    this._questionService.getAllQuestions(this.fieldId, this.courseId).subscribe(
      question => {console.log(question);this.questions = question;},
      err       => {console.log(err);}
    );
  }
  
  onSubmit() {
    this._questionService.postQuestion(this.model).subscribe(
      response => {console.log(response);location.reload();},
      err      => {console.log(err);}
    );
  }
}
