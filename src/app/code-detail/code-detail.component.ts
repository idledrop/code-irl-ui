import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { CodeService, CodeDisplayComponent } from '../shared';
import { CodeVoteComponent, CommentsComponent } from './';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'code-detail',
    styles: [require('./code-detail.component.css')],
    template: require('./code-detail.component.html'),
    directives: [CodeDisplayComponent, CodeVoteComponent, CommentsComponent]

})
export class CodeDetailComponent implements OnInit {

    code;
    tags:any[];

    constructor(private router: Router,
        private routeParams: RouteParams,
        private codeService: CodeService) { }

    ngOnInit() {
        var id = this.routeParams.get("id");
        var numId = parseInt(id);

        var code$ = this.codeService.getCode(numId);
        code$.subscribe(r => this.code = r);

        this.codeService.getCodeTags(numId)
            .subscribe(tags => this.tags = tags);
    }
}