import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-message',
  template: `<h2>{{message}}</h2>`
})
export class MessageComponent implements OnInit {
  @Input() message: string;

  ngOnInit() {
    console.log('app-message=', this.message);
  }
}
