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
    var core_1, router_1, card_1, university_service_1, quick_card_component_1;
    var FieldsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            FieldsComponent = (function () {
                function FieldsComponent(_router, _universityService) {
                    this._router = _router;
                    this._universityService = _universityService;
                    this.title = "You're home!!";
                    this.university = "University";
                    this.fields = [];
                }
                FieldsComponent.prototype.navigateToCourses = function (fieldId) {
                    this._router.navigate(['Courses', { fieldId: fieldId }]);
                };
                FieldsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._universityService.getFields().subscribe(function (university) { return _this.university = university[0].uni_id.uni_name; }, function (err) { console.log(err); });
                    this._universityService.getFields().subscribe(function (field) { _this.fields = field; console.log(field); }, function (err) { console.log(err); });
                };
                FieldsComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'static/src/fields/fields.component.html',
                        styleUrls: ['static/src/fields/fields.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, quick_card_component_1.QuickCardComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, university_service_1.UniversityService])
                ], FieldsComponent);
                return FieldsComponent;
            }());
            exports_1("FieldsComponent", FieldsComponent);
        }
    }
});
//# sourceMappingURL=fields.component.js.map