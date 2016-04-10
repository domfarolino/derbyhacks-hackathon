import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

import { User } from '../shared/services/user/user';
import { UserService } from '../shared/services/user/user.service';

import { MdButton } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'login',
  templateUrl: 'static/src/login/login.component.html',
  styleUrls: ['static/src/login/login.component.css'],
  directives: [MdButton, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES]
})

export class LoginComponent {
  model = {
      "email": "",
      "password": ""
  };
  
  constructor(private _userService: UserService) {
    
  }
  
  onSubmit() {
    this._userService.login(this.model)
                   .subscribe(
                     data  => {console.log(data);},
                     error =>  {console.log(data);});
  }
  
}