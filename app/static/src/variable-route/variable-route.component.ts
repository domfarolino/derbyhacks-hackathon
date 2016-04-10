import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'variable-route',
  templateUrl: 'static/src/variable-route/variable-route.component.html'
})

export class VariableRouteComponent {
  title = "University: ";
  
  constructor(private _routeParams: RouteParams) {
    this.title += this._routeParams.get('university');
  }

}