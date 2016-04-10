import { Injectable } from 'angular2/core';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuestionService {
  constructor (private http: Http) { }

  private _questionsUrl = '/api/questions';
  private _questionAndAnswersUrl = '/api/answers';
  
  getAllQuestions(fieldsId: number, courseId: number) {
    // return Observable.from(
    //   [
    //     {"qid": 43, "title": "C++ Struggles", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"},
    //     {"qid": 5, "title": "Life and times of KyTrol", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"},
    //     {"qid": 35, "title": "It's Not About The Destination, It's About the Subways Along The Way", "question": "If there's a metal train that's a mile long and at the very back end a lightning bolt struck her. How long till it reaches and kills the driver? Provided that he's a good conductor. If 10% of men are gay, and 20% of men are Chinese. Then what are the odds of a man choosen at random that spends his free time and meal time while on his knees?"}
    //   ]
    // );
    return this.http.get(this._questionsUrl + "?cid="+courseId)
                  .map(res => res.json())
                  .catch(this.handleError);
  }
  
  getQuestionInformation(qId: number) {
    return this.http.get(this._questionAndAnswersUrl + "?qid="+qId)
                  .map(res => res.json())
                  .catch(this.handleError);
  }
  
  postQuestion(question) {
    //question: string, questionTitle: string, uid: number
    let body = JSON.stringify(question);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._questionsUrl, body, {headers:headers})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  
  postAnswer(answer) {
    let body = JSON.stringify(answer);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._questionAndAnswersUrl, body, {headers:headers})
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}