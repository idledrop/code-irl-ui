import { BehaviorSubject } from 'rxjs/Rx';

export class TagList{
  private tags:any[];
  tags$:Observable<any[]>;

  constructor(){
    this.tags = [];
    this.tags$ = new BehaviorSubject([]);
  }
}