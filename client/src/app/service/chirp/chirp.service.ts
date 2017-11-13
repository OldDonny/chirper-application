import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    static api: string='http://localhost:3000/api/chirps'
    constructor(private http: HttpClient){}

    getUsers(): Observable<any>{
        return this.http
            .get(UserService.api)  
    }

    getUser(id: string): Observable<any> {
        return this.http
            .get(`${UserService.api}/${id}`)
    }

    create(chirp: { user:string, message:string }){
        return this.http.post(UserService.api, chirp)
    }

    delete(id:string){
        return this.http.delete(`${UserService.api}/${id}`)
    }
}
