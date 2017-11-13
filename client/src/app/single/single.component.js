"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
const Rx_1 = require("rxjs/Rx");
let SingleComponent = class SingleComponent {
    constructor(userService, route, location) {
        this.userService = userService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.paramMap
            .switchMap((params) => {
            return Rx_1.Observable.from(this.userService.getUser(params.get('id')));
        })
            .subscribe(chirp => this.chirp = chirp);
    }
    backDelete() {
        this.userService.delete(this.chirp.id)
            .subscribe(() => {
        });
        this.location.back();
    }
};
SingleComponent = __decorate([
    core_1.Component({
        selector: 'app-single',
        templateUrl: './single.component.html',
        styleUrls: ['./single.component.css']
    })
], SingleComponent);
exports.SingleComponent = SingleComponent;
