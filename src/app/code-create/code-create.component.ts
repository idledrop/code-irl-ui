import { Component, OnInit } from '@angular/core';

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

  constructor(private codeService:CodeService) {
    
  }

  ngOnInit() { 
  }

  addCode(){
    let tags = this.tagList.tags$
      .value.map(tag => tag.id);
    
    this.codeService.postCode(this.code)
      .switchMap(code => this.codeService.addCodeTags(code.id, tags))
      .subscribe(tags => {return});
  }

}