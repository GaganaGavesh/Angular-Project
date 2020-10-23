import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appbasicHighlight]'
})
export class BasichighlightDirective implements OnInit{
    //directive eka dana element eke reference tika thama apata ganna ona
    //constructor eke karala tynne eka 
    constructor(private elementRef: ElementRef){
        //private dammama me elementRef kiyana property eka class eke use karanna pluwan
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        //me wage direct element eka access kirima good practice ekak nwei
        //Mko angular ekata pluwan DOM ekak nathuwa content eka render karanna
        //ehema awasthawak unoth me wage direct acces karala element change karapu changes wada karanne ne
    }

}