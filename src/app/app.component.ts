import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// import { LoginComponent } from '../login/login.component';
// import { HomeRootComponent } from '../home-root/home-root.component';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/app.component.html',
  styleUrls: ['src/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

// @RouteConfig([
//   {
//     path: '/...',
//     name: 'HomeRoot',
//     component: HomeRootComponent,
//     useAsDefault: true
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: LoginComponent
//   }
// ])

export class AppComponent {
  title = "DerbyHacks";
  constructor() {
  }
  
  getCoolDataFromKyesAPI() {
    this.title += " - You added to the text";
  }
}