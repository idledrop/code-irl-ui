/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { CodeCreateComponent } from './code-create';
import { CodeDetailComponent } from './code-detail';
import { CodeDisplayComponent } from './shared';
import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          <button md-button router-active [routerLink]="['CodeCreate']">
            Create Code Sample
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <footer>
      </footer>
      </md-content>
  `
})
@RouteConfig([
  { path: '/code', name: 'CodeCreate', loader: () => require('es6-promise!./code-create')('CodeCreateComponent') },
  { path: '/code-detail/:id',  name: 'CodeDetail',  component: CodeDetailComponent },
  { path: '/',      name: 'Home', component: Home, useAsDefault: true }
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  // { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  loading = false;
  name = 'Code IRL';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}