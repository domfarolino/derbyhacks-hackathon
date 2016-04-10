import { Component, OnInit } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UniversityService } from '../shared/services/university/university.service';
import { QuickCardComponent } from '../shared/components/quick-card/quick-card.component';

@Component({
  selector: 'courses',
  templateUrl: 'static/src/courses/courses.component.html',
  styleUrls: ['static/src/courses/courses.component.css'],
  directives: [MD_CARD_DIRECTIVES, QuickCardComponent]
})

export class CoursesComponent implements OnInit {
  title = "Courses";
  courses = [];
  
  constructor(private _router: Router, private _routeParams: RouteParams, private _universityService: UniversityService) {

  }
  
  navigateToQuestions(courseId: number) {
    this._router.navigate( ['Questions', { fieldId: this.fieldId, courseId: courseId }] );
  }
  
  ngOnInit() {
    this.fieldId = +this._routeParams.get('fieldId');
    this._universityService.getCourses(this.fieldId).subscribe(
      course => {this.courses = course; console.log(course);},
      err => {console.log(err);},
    );
  }
}