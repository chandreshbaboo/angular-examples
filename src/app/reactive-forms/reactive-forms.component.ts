import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { pairwise, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit, AfterViewInit {
  @ViewChild('rememberMe') private rememberMe: ElementRef<HTMLInputElement>;
  public form: FormGroup;
  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.triggerFirstNameChange();
  }

  ngAfterViewInit(): void {
    this.rememberMeClicked();
  }

  public onSubmit() {
    console.log(this.form.value);
  }

  private initForm(): void {
    this.form = this.fb.group({
      firstName: [null],
      lastName: [null],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      rememberMe: [null]
    });
  }

  private triggerFirstNameChange() {
    const firstNameField = this.form.get('firstName') as FormControl;
    firstNameField.valueChanges.pipe(startWith(null), pairwise()).subscribe(([prev, next]) => {
      console.log(`Prev=${prev}, Next=${next}`);
    });
  }

  private rememberMeClicked() {
    console.log('this.rememberMe', this.rememberMe);
    const rememberMeField = this.form.get('rememberMe') as FormControl;
    this.rememberMe.nativeElement.onclick = () => {
      console.log('celled', rememberMeField.value);
    }
  }
}
