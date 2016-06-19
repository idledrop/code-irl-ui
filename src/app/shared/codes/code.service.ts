import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { CustomHttpService } from '../.';

@Injectable()
export class CodeService {
  private codesUrl:string[] = ['codes'];
  constructor(private customHttpService:CustomHttpService) { }

  getAllCodes(tagIds:any[]):Observable<any[]>{
    return this.customHttpService.getAllRequest(this.codesUrl, {tags:tagIds.join(',')});
  }

  getCode(id:number){
    return this.customHttpService.getRequest([...this.codesUrl, id.toString()]);
  }

  getCodeTags(codeId:number){
    return this.customHttpService.getAllRequest(this.getCodeTagsUrl(codeId));
  }

  upvoteCode(codeId:number){
    return this.customHttpService.putRequest([...this.codesUrl, codeId.toString()], {up:1})
  }

  downvoteCode(codeId:number){
    return this.customHttpService.putRequest([...this.codesUrl, codeId.toString()], {down:0})
  }

  addCodeTags(codeId:number, tags:any[]){
    return this.customHttpService.postRequest(this.getCodeTagsUrl(codeId), tags);
  }

  deleteCodeTags(codeId:number, tagId:number){
    let path = [...this.getCodeTagsUrl(codeId), tagId.toString()]
    return this.customHttpService.deleteRequest(path); 
  }

  private getCodeTagsUrl(codeId:number){
    return [...this.codesUrl, codeId.toString(), 'tags']
  }
}