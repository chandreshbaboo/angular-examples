import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  public userModel = {
    firstName: 'Chandresh',
    lastName: 'baboo',
    email: 'chandresh.baboo@gmail.com'
  };
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm) {
    // here new value will be available
    console.log('submit', form.value);
  }

  onClear() {
    // Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
    this.signupForm.reset();
  }

  onChangeFirstName(event) {
    console.log('new Value=', event);
    /*
      if we use only one way binding, then we can send the values from the model to view.
      it we change the value in view, will not reflect in the model.
    */
    console.log('onChangeFirstName', this.userModel);
  }
}
