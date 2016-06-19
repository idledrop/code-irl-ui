import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { CodeService, CodeDisplayComponent } from '../shared';

@Component({
    selector: 'code-detail',
    template: require('./code-detail.component.html'),
    directives: [CodeDisplayComponent]

})
export class CodeDetailComponent implements OnInit {

    private code;
    constructor(private router: Router,
        private routeParams: RouteParams,
        private codeService: CodeService) { }

    ngOnInit() {
        var id = this.routeParams.get("id");
        var numId = parseInt(id);
        var code$ = this.codeService.getCode(numId);
        code$.subscribe(r => this.code = r);
    }
}