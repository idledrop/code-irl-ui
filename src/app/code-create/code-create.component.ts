import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { TagList, CodeService, TagsComponent } from '../shared';

@Component({
  selector: 'code-create',
  template: require('./code-create.component.html'),
  styles: [require('./code-create.component.css')],
  directives: [TagsComponent]
})
export class CodeCreateComponent implements OnInit {
  tagList:TagList = new TagList();
  code:{} = {};

  constructor(private codeService:CodeService, private router:Router) {
    
  }

  ngOnInit() { 
    
  }

  addCode(){
    let tags = this.tagList.tags$
      .value.map(tag => tag.id);
    
    let codeId:number;

    this.codeService.postCode(this.code)
      .switchMap(code => {
        codeId = code.id;
        return this.codeService.addCodeTags(code.id, tags);
      })
      .subscribe(tags => this.router.navigate(['CodeDetail', {id:codeId}]));
  }

}