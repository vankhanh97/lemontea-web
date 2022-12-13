import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://lemontea-web-be.vercel.app/api/auth/';
const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
  })

export class AuthService { 
    httpOptions: any;

    constructor(private http: HttpClient) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        'Access-Control-Allow-Origin': 'http://lemontea.online',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      };
    }
    
    login(obj: { email: any; password: any; }): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
            email: obj.email,
            password: obj.password
        }, this.httpOptions);
      }
      
    signOut() {
        window.localStorage.clear();
        window.sessionStorage.clear();
      }
    
    public saveTokenLocal(token: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    
    public saveTokenSession(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    
    public getToken(): any {
        if(localStorage.getItem(TOKEN_KEY)!==null){
          return localStorage.getItem(TOKEN_KEY);
        }else {
          return sessionStorage .getItem(TOKEN_KEY);
        }
      }
}
