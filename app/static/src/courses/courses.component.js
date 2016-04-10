System.register(['angular2/core', 'angular2/router', '@angular2-material/card', '../shared/services/university/university.service', '../shared/components/quick-card/quick-card.component'], function(exports_1) {
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
    var core_1, router_1, router_2, card_1, university_service_1, quick_card_component_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (university_service_1_1) {
                university_service_1 = university_service_1_1;
            },
            function (quick_card_component_1_1) {
                quick_card_component_1 = quick_card_component_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(_router, _routeParams, _universityService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._universityService = _universityService;
                    this.title = "Courses";
                    this.courses = [];
                }
                CoursesComponent.prototype.navigateToQuestions = function (courseId) {
                    this._router.navigate(['Questions', { fieldId: this.fieldId, courseId: courseId }]);
                };
                CoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.fieldId = +this._routeParams.get('fieldId');
                    this._universityService.getCourses(this.fieldId).subscribe(function (course) { _this.courses = course; console.log(course); }, function (err) { console.log(err); });
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        templateUrl: 'static/src/courses/courses.component.html',
                        styleUrls: ['static/src/courses/courses.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, quick_card_component_1.QuickCardComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, university_service_1.UniversityService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map