import { Component, OnInit, Input } from '@angular/core';

import { CodeService } from '../shared';

@Component({
  selector: 'comments',
  template: require('./comments.component.html'),
  styles: [require('./comments.component.css')]
})
export class CommentsComponent implements OnInit {
  @Input() codeId:number;
  newComment:{} = {};  
  comments:any[];

  constructor(private codeService:CodeService) { }

  ngOnInit() { 
    this.codeService.getAllComments(this.codeId)
      .subscribe(comments => this.comments = comments)
  }

  addComment(){
    this.codeService.addComment(this.codeId, this.newComment)
      .subscribe(comment => {
        this.newComment = {};
        this.comments.push(comment);
      });
  }

}