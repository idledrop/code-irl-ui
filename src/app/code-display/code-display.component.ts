import { Component, Input } from '@angular/core';
import { Control, FORM_DIRECTIVES } from '@angular/common'

import { Observable } from 'rxjs/Rx';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'code-display',
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
        FORM_DIRECTIVES
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./code-display.html')
})
export class CodeDisplayComponent {
    @Input() url: string;

    constructor(private codeDisplayService: CodeDisplayService) {

    }
}
