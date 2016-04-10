import { Injectable } from 'angular2/core';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

/**
 * Import interfaces that service depends on
 */
import { User } from './user';

@Injectable()
export class UserService {
  constructor (private http: Http) { }

  private _baseUrl = '/api/users';
  private _registerUrl = '/api/register';
  private _loginUrl = '/api/authUser';
  
  private _user;
  
  register(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._registerUrl, body, {headers:headers})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  
  getUser() {
    let mockUser = {
      "firstname": "Dom",
      "lasname": "Farolino",
      "email": "domfarolino@mail.uc.edu"
    }
    return Observable.from([mockUser]);
    // return this.http.get(this._registerUrl, body, {headers:headers})
    //                 .map((res: Response) => res.json())
  }
  
  login(user) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._loginUrl, body, {headers:headers})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}