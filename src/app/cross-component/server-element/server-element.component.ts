//import { ViewEncapsulation } from '@angular/compiler/src/compiler_facade_interface';
import { 
  Component, 
  Input, 
  OnInit, 
  SimpleChange, 
  ViewEncapsulation,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated//None,Native
  
})
//ViewEncapsulation.Emulated thama default tynne
  //none kiyala dammama e component ekata dana css globaly wada karanawa
export class ServerElementComponent implements OnInit {
//meka single server element ekak
//meke values newei issarahain thiyenne,eke properties thama type ekath ekka tynne
//meka jason object ekak
  //element: {type: string, name: string, content: string};//mehema tynakota me property eka me component eken pita katawath 
  //access karanna be

  @Input() element: {type: string, name: string, content: string};

  //@Input kiyala danne api parent component eken data ganna nisa.
  //parent component ekata data denawa nam (emit karanawa nam) @Output kiyala thama e properties walata danna ona

  constructor() { 
    console.log('Constructor called');
  }

  ngOnchanges(changes: SimpleChange){
    console.log('On Changes called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Ng OnInit called');
  }

}
