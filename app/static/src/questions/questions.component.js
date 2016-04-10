System.register(['angular2/core', 'angular2/router', '@angular2-material/button', '@angular2-material/input', '@angular2-material/card', '../questions/question/question.component', '../shared/services/question/question.service'], function(exports_1) {
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
    var core_1, router_1, router_2, button_1, input_1, card_1, question_component_1, question_service_1;
    var QuestionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
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
            function (question_component_1_1) {
                question_component_1 = question_component_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            }],
        execute: function() {
            QuestionsComponent = (function () {
                function QuestionsComponent(_routeParams, _router, _questionService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._questionService = _questionService;
                    this.title = "Courses";
                    this.questions = [];
                    this.model = {
                        question: "",
                        questionTitle: "",
                        uid: "2",
                        p_to_c_id: "1"
                    };
                }
                QuestionsComponent.prototype.navigateToQuestion = function (qId) {
                    this._router.navigate(['FullQuestion', { qId: qId }]);
                };
                QuestionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.fieldId = +this._routeParams.get('fieldId');
                    this.courseId = +this._routeParams.get('courseId');
                    this._questionService.getAllQuestions(this.fieldId, this.courseId).subscribe(function (question) { console.log(question); _this.questions = question; }, function (err) { console.log(err); });
                };
                QuestionsComponent.prototype.onSubmit = function () {
                    this._questionService.postQuestion(this.model).subscribe(function (response) { console.log(response); location.reload(); }, function (err) { console.log(err); });
                };
                QuestionsComponent = __decorate([
                    core_1.Component({
                        selector: 'questions',
                        templateUrl: 'static/src/questions/questions.component.html',
                        styleUrls: ['static/src/questions/questions.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton, question_component_1.QuestionComponent]
                    }), 
                    __metadata('design:paramtypes', [router_2.RouteParams, router_1.Router, question_service_1.QuestionService])
                ], QuestionsComponent);
                return QuestionsComponent;
            }());
            exports_1("QuestionsComponent", QuestionsComponent);
        }
    }
});
//# sourceMappingURL=questions.component.js.map