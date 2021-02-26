import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-forms',
    pathMatch: 'full'
  },
  {
    path: 'template-forms',
    component: TemplateFormsComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  },
  {
    path: 'custom-input',
    component: CustomInputComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
