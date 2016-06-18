import { Injectable } from '@angular/core';

import { CustomHttpService } from '../.';

@Injectable()
export class TagService {
  private tagsUrl:string[] = ['tags'];

  constructor(private customHttpService:CustomHttpService) {}

  getTags(tagName:string){
    return this.customHttpService.getAllRequest(this.tagsUrl, {name:tagName});
  }

  postTag(tagName:string){
    return this.customHttpService.postRequest(this.tagsUrl, {name:tagName});
  }
}