System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, http_1, Rx_1;
    var QuestionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            QuestionService = (function () {
                function QuestionService(http) {
                    this.http = http;
                    this._questionsUrl = '/api/questions';
                    this._questionAndAnswersUrl = '/api/answers';
                }
                QuestionService.prototype.getAllQuestions = function (fieldsId, courseId) {
                    // return Observable.from(
                    //   [
                    //     {"qid": 43, "title": "C++ Struggles", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"},
                    //     {"qid": 5, "title": "Life and times of KyTrol", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"},
                    //     {"qid": 35, "title": "It's Not About The Destination, It's About the Subways Along The Way", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"}
                    //   ]
                    // );
                    return this.http.get(this._questionsUrl + "?cid=" + courseId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                QuestionService.prototype.getQuestionInformation = function (qId) {
                    return this.http.get(this._questionAndAnswersUrl + "?qid=" + qId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                QuestionService.prototype.postQuestion = function (question) {
                    //question: string, questionTitle: string, uid: number
                    var body = JSON.stringify(question);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._questionsUrl, body, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                QuestionService.prototype.postAnswer = function (answer) {
                    var body = JSON.stringify(answer);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._questionAndAnswersUrl, body, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                QuestionService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                QuestionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], QuestionService);
                return QuestionService;
            }());
            exports_1("QuestionService", QuestionService);
        }
    }
});
//# sourceMappingURL=question.service.js.map