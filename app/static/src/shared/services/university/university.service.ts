import { Injectable } from 'angular2/core';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UniversityService {
  constructor (private http: Http) { }

  private _fieldsUrl = '/api/fields';
  private _coursesUrl = '/api/courses';
  
  getFields() {
    // return Observable.from(
    //   [
    //     {"id": 43, "field": "Art"},
    //     {"id": 5, "field": "Computer Science"},
    //     {"id": 35, "field": "Math"}
    //   ]
    // )
    return this.http.get(this._fieldsUrl)
                  .map(res => res.json())
                  .catch(this.handleError);
  }
  
  getCourses(field_id: number) {
    // return Observable.from(
    //   [
    //     {"id": 54, "field": "Course 101"},
    //     {"id": 76, "field": "Course 201"},
    //     {"id": 45, "field": "Course 301"}
    //   ]
    // )
    return this.http.get(this._coursesUrl + "?field_id=" + field_id)
                  .map(res => res.json())
                  .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}