import { MessageComponent } from './../message/message.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @ContentChildren(MessageComponent) private messageComponent: QueryList<MessageComponent>;
  @ViewChild('templateRef') private templateRefEle: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit  - data is`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit", this.messageComponent);
    console.log('ngAfterContentInit templateRefEle=', this.templateRefEle);
    this.messageComponent.forEach(child => {
      child.message = 'All updated';
    });
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.templateRefEle);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
