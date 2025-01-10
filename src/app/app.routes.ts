import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'page1',
    component: Page1Component,
    data: {
      text: 'Page 1'
    }
  },
  {
    path: 'page2',
    component: Page2Component,
    data: {
      text: 'Page 2'
    }
  },
  {
    path: 'page3',
    component: Page3Component,
    data: {
      text: 'Page 3'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
