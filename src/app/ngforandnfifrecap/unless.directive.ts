import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //me unless kiyana eka property ekak eka set kiyana key word eka nisa method ekak bawata path wela tynne
  //meka taththatama property ekak.set kiyana eka method ekak 
  //unless kiyana property eka change unoth execute wena
  //*appUnless ekka html file eke tyna directive ekka automatically transform wenawa ng-template 
  //kiyana ekata ethakota eken hoyanne proprty ekak [appUnless]
  //@Input dala tyna property eke namatama samana wenna ona eka
  //Mkoo methana karanne property binding eakka nisa
  @Input() set appUnless(condition: boolean){
    if(!condition)
    {
      //createEmbeddedView eken karanne Dom eke mark karagaththa thanakata template eka render karana eka
      this.vcRef.createEmbeddedView(this.templateRef);
      //templateRef [WHAT] kiyanne api directive eka dala tyna template eka
      //vcRef [WHERE] ViewContainerRef where should we render it DOM eke render karanna ona thana markkaragena tynne
      //meken. ethenta templateRef eke tyna eka render karanawa
    }else{
      this.vcRef.clear();
      //clear eken karanne DOM eke mark karagaththa thana tyna serama data destroy karana eka,clear karana eka
      //view container eka clear karanawa
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
