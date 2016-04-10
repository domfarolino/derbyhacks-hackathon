import { Component, Input } from 'angular2/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'question',
  templateUrl: 'static/src/questions/question/question.component.html',
  styleUrls: ['static/src/questions/question/question.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})

export class QuestionComponent {
    @Input() title: string;
    @Input() question: string;
    constructor() {
        
    }
}