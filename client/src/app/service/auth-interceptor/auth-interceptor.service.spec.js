"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const auth_interceptor_service_1 = require("./auth-interceptor.service");
describe('AuthInterceptorService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_interceptor_service_1.AuthInterceptorService]
        });
    });
    it('should be created', testing_1.inject([auth_interceptor_service_1.AuthInterceptorService], (service) => {
        expect(service).toBeTruthy();
    }));
});
