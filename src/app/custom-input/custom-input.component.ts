import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ThemeableButtonComponent } from '../themeable-button/themeable-button.component';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit, AfterViewInit {
  @ViewChildren(ThemeableButtonComponent) private themeComp: QueryList<ThemeableButtonComponent>
  public messages = [
    'Hello India',
    'Which team is winning Super Bowl? ',
    'Have you checked Ignite UI ?',
    'Take your broken heart and make it to the art'
  ];
  constructor(
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // console.log('called OnIt', this.themeComp);
  }

  ngAfterViewInit(): void {
    console.log('custom-input called AfterViewInit', this.themeComp);
    this.themeComp.forEach(child => {
      if (child.btnText === 'Save') {
        child.btnText = 'some thing else';
      }
    })
    this.changeDetection.detectChanges();
  }

  // ngAfterViewChecked(): void {
  //   console.log('called AfterViewChecked', this.themeComp);
  // }

  // ngAfterContentInit(): void {
  //   console.log('called AfterContentInit', this.themeComp);
  // }

  // ngAfterContentChecked(): void {
  //   console.log('called AfterContentChecked', this.themeComp);
  //   // this.themeComp.btnText = 'some thing else';
  // }
}
