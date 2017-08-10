import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string  = 'transparent';
  @Input() highlightedColor: string;
  @HostBinding('style.backgroundColor') background: string;
  /*constructor(private elRef: ElementRef, private renderer: Renderer2) { }*/

  ngOnInit() {
    this.background = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/
    this.background = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');*/
    this.background = this.defaultColor;
  }
}
