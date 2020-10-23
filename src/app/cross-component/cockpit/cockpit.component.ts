import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  //me component eken karanne ape parent component ekata api new server ekak create kala kiyala kiyana eka
  //and e server or bluprint data parent component ekaa yawana eka
  //e mokada parent component eke thama ape serverElements[] Array eka tynne
  //Aluth properties 2k create karanna ona.ewagen event emit karanna ona,e event parent component ekata output karannath ona
 
  //EventEmitter<Api emit karanna yana data wala types define karanna pluwan methana,meka generic ekak,ts wala generic danne <>athule>

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //creates an instance of this class that can
  //deliver events synchronously or asynchronously.
  //object ekak hadanawa event emit karanna pluwn widiye
  @Output() bluprintCreated = new EventEmitter<{bluprintName: string, bluprintContent: string}>();

  //newServerName = '';//local reference daapu nisa me variable eka ona wenne ne
  //newServerContent = '';

  //method ekata local Reference eka pass karanne nathuwa .ts file ekenma ganna pluwan 
  // server content <input> value eka 
  @ViewChild('serverContentInput') serverContentInput: ElementRef;//serverContentInput kiyanne 
  //element reference type property ekak
  


  onAddServer(nameInput: HTMLInputElement) {
    
    //HTMLInputElement kiyanne variable eke type eka
    //console.log(nameInput.value);
    //uda event emit karanna pluwn widiyata hadapu object ekata values assign karala emit karanawa
    this.serverCreated.emit({
      serverName: nameInput .value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluprintCreated.emit({
      bluprintName: nameInput.value, 
      bluprintContent: this.serverContentInput.nativeElement.value});
      console.log(this.serverContentInput);
  }
}
