System.register(['angular2/core', '../shared/services/user/user.service', '@angular2-material/button', '@angular2-material/input', '@angular2-material/card'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, button_1, input_1, card_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_userService) {
                    this._userService = _userService;
                    this.model = {
                        "email": "",
                        "password": ""
                    };
                }
                LoginComponent.prototype.onSubmit = function () {
                    this._userService.login(this.model)
                        .subscribe(function (data) { console.log(data); }, function (error) { console.log(data); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'static/src/login/login.component.html',
                        styleUrls: ['static/src/login/login.component.css'],
                        directives: [button_1.MdButton, input_1.MD_INPUT_DIRECTIVES, card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map