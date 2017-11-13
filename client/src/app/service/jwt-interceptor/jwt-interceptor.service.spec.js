"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const jwt_interceptor_service_1 = require("./jwt-interceptor.service");
describe('JwtInterceptorService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [jwt_interceptor_service_1.JwtInterceptorService]
        });
    });
    it('should be created', testing_1.inject([jwt_interceptor_service_1.JwtInterceptorService], (service) => {
        expect(service).toBeTruthy();
    }));
});
