"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SigninDirective = class SigninDirective {
    constructor(temp, Vc) {
        this.temp = temp;
        this.Vc = Vc;
    }
    set appSignin(condition) {
        if (condition) {
            this.Vc.createEmbeddedView(this.temp);
        }
        else {
            this.Vc.clear();
        }
    }
};
__decorate([
    core_1.Input()
], SigninDirective.prototype, "appSignin", null);
SigninDirective = __decorate([
    core_1.Directive({
        selector: '[appSignin]'
    })
], SigninDirective);
exports.SigninDirective = SigninDirective;
