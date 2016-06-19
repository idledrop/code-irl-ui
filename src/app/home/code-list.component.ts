import { Component, OnInit, Input } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { RouteParams, Router } from '@angular/router-deprecated';

import { Observable } from 'rxjs/Rx';

import { TagList, CodeService } from '../shared';

@Component({
  selector: 'code-list',
  template: require('./code-list.component.html'),
  styles: [require('./code-list.component.css')],
  directives: [MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class CodeListComponent implements OnInit {
  @Input() tagList:TagList;

  codeList:Observable<any>;

  constructor(private codeService:CodeService, private router: Router) { }

  ngOnInit() { 
    this.codeList = this.tagList.tags$
      .map(tags => tags.map(tag => tag.id))
      .switchMap(tagIds => this.codeService.getAllCodes(tagIds));
  }

  goToTheCode(code) {
      this.router.navigate(['CodeDetail', {id: code.id}]);
  }
}