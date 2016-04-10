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
    var UniversityService;
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
            UniversityService = (function () {
                function UniversityService(http) {
                    this.http = http;
                    this._fieldsUrl = '/api/fields';
                    this._coursesUrl = '/api/courses';
                }
                UniversityService.prototype.getFields = function () {
                    // return Observable.from(
                    //   [
                    //     {"id": 43, "field": "Art"},
                    //     {"id": 5, "field": "Computer Science"},
                    //     {"id": 35, "field": "Math"}
                    //   ]
                    // )
                    return this.http.get(this._fieldsUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                UniversityService.prototype.getCourses = function (field_id) {
                    // return Observable.from(
                    //   [
                    //     {"id": 54, "field": "Course 101"},
                    //     {"id": 76, "field": "Course 201"},
                    //     {"id": 45, "field": "Course 301"}
                    //   ]
                    // )
                    return this.http.get(this._coursesUrl + "?field_id=" + field_id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                UniversityService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                UniversityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UniversityService);
                return UniversityService;
            }());
            exports_1("UniversityService", UniversityService);
        }
    }
});
//# sourceMappingURL=university.service.js.map