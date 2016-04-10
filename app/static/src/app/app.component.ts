import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { User } from  '../shared/services/user/user';
import { UserService } from  '../shared/services/user/user.service';
import { UniversityService } from '../shared/services/university/university.service';
import { QuestionService } from '../shared/services/question/question.service';

import { FieldsComponent } from '../fields/fields.component';
import { CoursesComponent } from '../courses/courses.component';
import { LoginComponent } from '../login/login.component';
import { QuestionsComponent } from '../questions/questions.component';
import { RegistrationComponent } from '../registration/registration.component';
import { VariableRouteComponent } from '../variable-route/variable-route.component';
import { FullQuestionComponent } from '../full-question/full-question.component';

@Component({
  selector: 'my-app',
  templateUrl: 'static/src/app/app.component.html',
  styleUrls: ['static/src/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MdButton, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, UserService, HTTP_PROVIDERS, UniversityService, QuestionService]
})

@RouteConfig([
  {
    path: '/',
    name: 'Fields',
    component: FieldsComponent
  },
  {
    path: '/:fieldId',
    name: 'Courses',
    component: CoursesComponent
  },
  {
    path: '/:fieldId/:courseId/questions',
    name: 'Questions',
    component: QuestionsComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/question/:qId',
    name: 'FullQuestion',
    component: FullQuestionComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: RegistrationComponent
  }
])

export class AppComponent {
  title = "Universify";
  constructor(private _router: Router) {
  }

}