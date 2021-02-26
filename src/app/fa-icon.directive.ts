import { Directive, HostBinding, HostListener } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appFaIcon]'
})
export class FaIconDirective {
  styles = {
    color: 'gray',
    background: '#fff',
    transform: 'none'
  };
  constructor(private sanitizer: DomSanitizer) { }

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(this.mappedStyle(this.styles));
  }

  private mappedStyle(styles) {
    return Object.entries(styles).reduce((styleString, [propName, propValue]) => {
      propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
      return `${styleString}${propName}:${propValue};`;
    }, '');
  }
}
