import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomHttpService } from '../.';

@Injectable()
export class TagService {
  private tagsUrl:string[] = ['tags'];

  constructor(private customHttpService:CustomHttpService) {}

  getTags(tagName?:string): Observable<any[]>{
    return this.customHttpService.getAllRequest(this.tagsUrl, {search:tagName});
  }

  postTag(tagName:string){
    return this.customHttpService.postRequest(this.tagsUrl, {name:tagName});
  }
}