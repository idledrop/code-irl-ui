import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestMethod, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomHttpService {

  private apiUrl = 'https://codeirl-api.herokuapp.com';
  private jsonHeaders:Headers = new Headers({'Content-Type':'application/json'});
  
  constructor(private http:Http) {}

  getRequest<T>(path:string[]):Observable<T>{
    let options = this.getRequestOptions(RequestMethod.Get);
    return this.sendRequest(path, options);
  }

  getAllRequest<T>(path:string[], searchParams:{} = {}):Observable<T[]>{
    let options = this.getRequestOptions(RequestMethod.Get);

    options.search =  Object.keys(searchParams).reduce((search:URLSearchParams, searchName:string) => {
      search.append(searchName, searchParams[searchName]);
      return search;
    }, new URLSearchParams());

    return this.sendRequest(path, options);
  }

  putRequest<T>(path:string[], payload:T):Observable<T>{
    let options = this.getRequestOptions(RequestMethod.Put, payload);
    return this.sendRequest(path, options);
  }

  postRequest<T>(path:string[], payload:T):Observable<T>{
    let options = this.getRequestOptions(RequestMethod.Post, payload);
    return this.sendRequest(path, options);
  }

  deleteRequest(path:string[]):Observable<any>{
    let options = this.getRequestOptions(RequestMethod.Delete);
    return this.sendRequest(path, options);
  }

  private getRequestOptions(requestMethod:RequestMethod, payload?:{}){
    return new RequestOptions({
      method: requestMethod,
      body: JSON.stringify(payload),
      headers: this.jsonHeaders
    })
  }

  private sendRequest(path:string[], options:RequestOptions):Observable<any>{
    return this.http.request(`${this.apiUrl}/${path.join('/')}`, options)
      .map( res => this.extractData(res) )
      .catch( error => this.handleError(error))
  }

  private extractData(res){
    let body = res.json();
    return body.data || {};
  }

  private handleError(error){
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);

    return Observable.throw(errMsg);
  }
}