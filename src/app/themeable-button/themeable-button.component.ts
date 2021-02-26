import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeable-button',
  templateUrl: './themeable-button.component.html',
  styleUrls: ['./themeable-button.component.css']
})
export class ThemeableButtonComponent implements OnInit {
  @Input() btnText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
