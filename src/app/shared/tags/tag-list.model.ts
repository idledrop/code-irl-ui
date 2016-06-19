import { BehaviorSubject } from 'rxjs/Rx';

export class TagList{
  private tags:any[];
  tags$:BehaviorSubject<any[]>;

  constructor(){
    this.tags = [];
    this.tags$ = new BehaviorSubject([]);
  }

  removeTag(id:number){
    this.tags = this.tags.filter(tag => tag.id !== id);
    this.tags$.next(this.tags);
  }

  addTag(tag:any){
    if (this.tags.some(t => t.id === tag.id)) {
      alert("you already added that one, dummy!")
      return;
    }

    this.tags.push(tag);
    this.tags$.next(this.tags);
  }

  resetTags(){
    this.tags = [];
    this.tags$.next(this.tags);
  }
}