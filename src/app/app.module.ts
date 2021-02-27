import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './input-ref.directive';
import { FaIconDirective } from './fa-icon.directive';
import { GreetComponent } from './greet/greet.component';
import { ThemeableButtonComponent } from './themeable-button/themeable-button.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    CustomInputComponent,
    FaInputComponent,
    InputRefDirective,
    FaIconDirective,
    GreetComponent,
    ThemeableButtonComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faEnvelope, faLock);
  }
}
