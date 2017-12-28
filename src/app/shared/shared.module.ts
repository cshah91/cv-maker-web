import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
// TODO Not working with Angular 5. Look for an alternative for bootstrap form validations.
// import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TemplateComponent } from './templates/template.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    // NgBootstrapFormValidationModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    AboutComponent,
    TemplateComponent,
    ContactComponent,
    FooterComponent
  ],
  exports: [
    ModalModule,
    // NgBootstrapFormValidationModule
  ]
})
export class SharedModule {

}
