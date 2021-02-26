import { Component, Input, Output, HostBinding, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent {
  @Input() icon: string;
  @Input() placeholder: string;
  @Output() value = new EventEmitter<string>();
  inputFocus = false;

  @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }
}
