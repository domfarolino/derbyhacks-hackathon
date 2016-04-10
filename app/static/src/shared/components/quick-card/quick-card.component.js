System.register(['angular2/core', '@angular2-material/card'], function(exports_1) {
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
    var core_1, card_1;
    var QuickCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            QuickCardComponent = (function () {
                function QuickCardComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], QuickCardComponent.prototype, "title", void 0);
                QuickCardComponent = __decorate([
                    core_1.Component({
                        selector: 'quick-card',
                        templateUrl: 'static/src/shared/components/quick-card/quick-card.component.html',
                        styleUrls: ['static/src/shared/components/quick-card/quick-card.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuickCardComponent);
                return QuickCardComponent;
            }());
            exports_1("QuickCardComponent", QuickCardComponent);
        }
    }
});
//# sourceMappingURL=quick-card.component.js.map