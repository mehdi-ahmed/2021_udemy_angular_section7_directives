import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // way 1:
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange', false, false);

    // way 2:
    // this.backgroundColor = 'yellow';

    // way 3:
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // way 1:
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);

    // way 2:
    // this.backgroundColor = 'red';

    // way 3:
    this.backgroundColor = this.defaultColor;
  }

}
