import { InputRefDirective } from './../input-ref.directive';
import { Component, Input, Output, HostBinding, EventEmitter, ContentChild } from "@angular/core";

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent {
  @Input() icon: string;
  @ContentChild(InputRefDirective) private inputRef: InputRefDirective;

  @HostBinding('class.focus')
  get focus() {
    return this.inputRef ? this.inputRef.focus : false;
  }
}
