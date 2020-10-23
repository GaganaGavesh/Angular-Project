import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //DOM access waladi witharai me renderer kiyana eka wada karanne
  //angular eka service wada karanakota DOM ekak nathi nisa direct element access eken errors enna pluwan

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string 

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.backgroundColor = 'transparent';
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }
  //directive eka dala tyna thana style property eke background sub property eka
  //backgroundColor ekata dila tyna value eken wenas karanna
  //hostBinding eka use karaddi renderer2 eka ona wenne ne

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event){
    //console.log(eventData);
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    //this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
  }

  
}
