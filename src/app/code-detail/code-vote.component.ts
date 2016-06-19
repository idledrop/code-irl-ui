import { Component, OnInit, Input } from '@angular/core';

import { CodeService } from '../shared';

@Component({
  selector: 'code-vote',
  template: require('./code-vote.component.html')
})
export class CodeVoteComponent implements OnInit {
  @Input() codeId:number;

  constructor(
    private codeService:CodeService
  ) { }

  up(){
    this.codeService.upvoteCode(this.codeId)
      .subscribe();
  }

  down(){
    this.codeService.downvoteCode(this.codeId)
      .subscribe();
  }
}