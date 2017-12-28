import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AboutComponent } from './shared/about/about.component';
import { TemplateComponent } from './shared/templates/template.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'page-top',
    redirectTo: '',
    component: LayoutComponent
  },
  {
    path: 'about',
    component: LayoutComponent
  },
  {
    path: 'templates',
    component: LayoutComponent
  },
  {
    path: 'contact',
    component: LayoutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
