System.register(['angular2/core', 'angular2/router', '@angular2-material/button', '@angular2-material/input', '@angular2-material/card', '../shared/services/question/question.service'], function(exports_1) {
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
    var core_1, router_1, button_1, input_1, card_1, question_service_1;
    var FullQuestionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            }],
        execute: function() {
            FullQuestionComponent = (function () {
                function FullQuestionComponent(_routeParams, _questionService) {
                    this._routeParams = _routeParams;
                    this._questionService = _questionService;
                    this.title = "Question";
                    this.model = {
                        answer: "",
                        qid: "",
                        uid: ""
                    };
                }
                FullQuestionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.qId = +this._routeParams.get('qId');
                    this.model.qid = this.qId;
                    this._questionService.getQuestionInformation(this.qId).subscribe(function (question) { console.log(question); _this.question = question; _this.model.uid = question[0].qid.uid.uid; }, function (err) { console.log(err); });
                };
                FullQuestionComponent.prototype.onSubmit = function () {
                    this._questionService.postAnswer(this.model).subscribe(function (done) {
                        console.log(done);
                        location.reload();
                    }, function (err) { console.log(err); });
                    console.log("test");
                };
                FullQuestionComponent = __decorate([
                    core_1.Component({
                        selector: 'full-question',
                        templateUrl: 'static/src/full-question/full-question.component.html',
                        styleUrls: ['static/src/full-question/full-question.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, question_service_1.QuestionService])
                ], FullQuestionComponent);
                return FullQuestionComponent;
            }());
            exports_1("FullQuestionComponent", FullQuestionComponent);
        }
    }
});
//# sourceMappingURL=full-question.component.js.map