System.register(['angular2/core', 'angular2/router', 'angular2/http', '@angular2-material/toolbar', '@angular2-material/button', '@angular2-material/input', '@angular2-material/card', '../shared/services/user/user.service', '../shared/services/university/university.service', '../shared/services/question/question.service', '../fields/fields.component', '../courses/courses.component', '../login/login.component', '../questions/questions.component', '../registration/registration.component', '../full-question/full-question.component'], function(exports_1) {
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
    var core_1, router_1, http_1, toolbar_1, button_1, input_1, card_1, user_service_1, university_service_1, question_service_1, fields_component_1, courses_component_1, login_component_1, questions_component_1, registration_component_1, full_question_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (university_service_1_1) {
                university_service_1 = university_service_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (fields_component_1_1) {
                fields_component_1 = fields_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (questions_component_1_1) {
                questions_component_1 = questions_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (full_question_component_1_1) {
                full_question_component_1 = full_question_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = "Universify";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'static/src/app/app.component.html',
                        styleUrls: ['static/src/app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, button_1.MdButton, input_1.MD_INPUT_DIRECTIVES, card_1.MD_CARD_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, user_service_1.UserService, http_1.HTTP_PROVIDERS, university_service_1.UniversityService, question_service_1.QuestionService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Fields',
                            component: fields_component_1.FieldsComponent
                        },
                        {
                            path: '/:fieldId',
                            name: 'Courses',
                            component: courses_component_1.CoursesComponent
                        },
                        {
                            path: '/:fieldId/:courseId/questions',
                            name: 'Questions',
                            component: questions_component_1.QuestionsComponent
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent
                        },
                        {
                            path: '/question/:qId',
                            name: 'FullQuestion',
                            component: full_question_component_1.FullQuestionComponent
                        },
                        {
                            path: '/register',
                            name: 'Register',
                            component: registration_component_1.RegistrationComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map