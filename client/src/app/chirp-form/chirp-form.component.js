"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let ChirpFormComponent = class ChirpFormComponent {
    constructor(srv, router, fb) {
        this.srv = srv;
        this.router = router;
        this.fb = fb;
        this.form = this.fb.group({
            chirp: ['', forms_1.Validators.required]
        });
    }
    pushChirp(chirp) {
        let newChirp = { user: 'Oledonny', message: chirp };
        if (this.form.valid) {
            this.srv.create(newChirp)
                .subscribe(Response => {
                this.router.navigate(['/listpage']);
            });
        }
        else {
            return;
        }
    }
};
ChirpFormComponent = __decorate([
    core_1.Component({
        selector: 'chirp-form',
        templateUrl: './chirp-form.component.html',
        styleUrls: ['./chirp-form.component.css']
    })
], ChirpFormComponent);
exports.ChirpFormComponent = ChirpFormComponent;
