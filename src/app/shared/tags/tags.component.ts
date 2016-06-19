import { Component, Input } from '@angular/core';
import { Control } from '@angular/common'
import { TagService, TagList } from '../'

import { Observable } from 'rxjs/Rx';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'tags',
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./tags.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./tags.html')
})
export class TagsComponent {
    // Set our default values
    // TypeScript public modifiers
    tagName: string;
    tagSearchControl = new Control();
    tags: Observable<any>;
    @Input() tagList:TagList;
    

    constructor(private tagService: TagService) {
        this.tags = this.tagSearchControl.valueChanges
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(tagName => {
                if (tagName === "") {
                    return Observable.of([]);
                } else {
                    return this.tagService.getTags(tagName);
                }
            });
    }

    addTag(tag) {
        this.tagName = "";
        this.tagList.addTag(tag);
    }
}
