import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm) {
    console.log('submit', form.value);
  }

  onClear() {
    // Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
    this.signupForm.reset();
  }
}
