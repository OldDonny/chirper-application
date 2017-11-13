"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const forms_2 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const material_1 = require("@angular/material");
const material_2 = require("@angular/material");
const material_3 = require("@angular/material");
const material_4 = require("@angular/material");
const material_5 = require("@angular/material");
const material_6 = require("@angular/material");
const app_component_1 = require("./app.component");
const list_component_1 = require("./list/list.component");
const single_component_1 = require("./single/single.component");
const chirp_form_component_1 = require("./chirp-form/chirp-form.component");
const chirp_service_1 = require("./service/chirp/chirp.service");
const material_7 = require("@angular/material");
const material_8 = require("@angular/material");
const material_9 = require("@angular/material");
const app_routing_module_1 = require("./app-routing-module");
const singlepage_component_1 = require("./singlepage/singlepage.component");
const homepage_component_1 = require("./homepage/homepage.component");
const listpage_component_1 = require("./listpage/listpage.component");
const signup_component_1 = require("./signup/signup.component");
const signinform_component_1 = require("./signinform/signinform.component");
const info_directive_1 = require("./info.directive");
const toolbar_component_1 = require("./toolbar/toolbar.component");
const signin_directive_1 = require("./signin.directive");
const http_1 = require("@angular/common/http");
const confirm_directive_1 = require("./confirm.directive");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            list_component_1.ListComponent,
            single_component_1.SingleComponent,
            chirp_form_component_1.ChirpFormComponent,
            singlepage_component_1.SinglepageComponent,
            homepage_component_1.HomepageComponent,
            listpage_component_1.ListpageComponent,
            signup_component_1.SignupComponent,
            signinform_component_1.SigninformComponent,
            info_directive_1.InfoDirective,
            toolbar_component_1.ToolbarComponent,
            signin_directive_1.SigninDirective,
            confirm_directive_1.ConfirmDirective,
        ],
        imports: [
            material_9.MatDialogModule,
            material_8.MatGridListModule,
            material_2.MatRadioModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule,
            material_1.MatButtonModule,
            material_1.MatCheckboxModule,
            material_2.MatInputModule,
            material_3.MatFormFieldModule,
            material_4.MatCardModule,
            material_5.MatMenuModule,
            material_7.MatToolbarModule,
            material_6.MatChipsModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule,
        ],
        providers: [chirp_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
