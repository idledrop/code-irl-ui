import { Component, Input, OnInit } from '@angular/core';
import { Control, FORM_DIRECTIVES } from '@angular/common'

import { CodeDisplayService } from '../';

import * as hljs from 'highlight.js';

import { HangoutsComponent } from './';

import { Observable } from 'rxjs/Rx';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'code-display',
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
        FORM_DIRECTIVES,
        HangoutsComponent
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require("./code-display.css"), require('highlight.js/styles/default.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./code-display.html')
})
export class CodeDisplayComponent implements OnInit {

    @Input() url: string;

    rawCode:string;

    constructor(private codeDisplayService: CodeDisplayService) {

    }

    getFileName() {
        var lastSlashIndex = this.url.lastIndexOf("/");
        return this.url.substr(lastSlashIndex+1);
    }

    ngOnInit() {
        this.codeDisplayService.getRawFile(this.url)
            .subscribe((rawCode) => {
                this.rawCode = rawCode;
                let codeBlock = document.getElementById('codeBlock');
                console.log(codeBlock);
                console.log(hljs);
                window.setTimeout(_ => {console.log(codeBlock); hljs.highlightBlock(codeBlock);}, 10 );
            }) 
    }
}
