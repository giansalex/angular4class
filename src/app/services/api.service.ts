import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    });
    constructor(
        private http: Http,
        @Inject('api') private apiEndpoint: string
        ) { }

    private getJson(resp: Response) {
        return resp.json();
    }

    private checkForError(resp: Response): Response {
        if (resp.status >= 200 && resp.status < 300) {
            return resp;
        } else {
            const error = new Error(resp.statusText);
            error['response'] = resp;
            console.error(error);
            throw error;
        }
    }
    get(path: string): Observable<any> {
        return this.http.get(
                `${this.apiEndpoint}${path}`, 
                {headers: this.headers}
        )
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson);
    }

    post(path, body): Observable<any> {
        return this.http.post(
            `${this.apiEndpoint}${path}`,
            JSON.stringify(body),
            { headers : this.headers}
        )
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.apiEndpoint}${path}`, 
        { headers: this.headers})
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson);
    }

    setHeaders(headers) {
        Object.keys(headers)
        .forEach(header => this.headers.set(header, headers[header]));
    }
}