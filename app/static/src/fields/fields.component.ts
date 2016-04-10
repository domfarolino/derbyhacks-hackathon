import { Component OnInit } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UniversityService } from '../shared/services/university/university.service';
import { QuickCardComponent } from '../shared/components/quick-card/quick-card.component';

@Component({
  selector: 'home',
  templateUrl: 'static/src/fields/fields.component.html',
  styleUrls: ['static/src/fields/fields.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, QuickCardComponent]
})

export class FieldsComponent implements OnInit {
  title = "You're home!!";
  university = "University";
  fields = [];
  
  constructor(private _router: Router, private _universityService: UniversityService) { }
  
  navigateToCourses(fieldId: number) {
    this._router.navigate( ['Courses', { fieldId: fieldId }] );
  }
  
  ngOnInit() {
    this._universityService.getFields().subscribe(
      university => this.university = university[0].uni_id.uni_name,
      err => {console.log(err);}
    );
    
    this._universityService.getFields().subscribe(
      field => {this.fields = field; console.log(field);},
      err => {console.log(err);}
    );
  }
}