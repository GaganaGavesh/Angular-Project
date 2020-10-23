import { Component} from '@angular/core';

@Component({
  selector: 'app-cross-component',
  templateUrl: './cross-component.component.html',
  styleUrls: ['./cross-component.component.css']
})
export class CrossComponentComponent{
  serverElements = [];
  //serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];
  //server element kiyana array ekata element
  //object assign karanawa ,mewa json object(key : 'value'). = sign ekak tynawa kiyanne values assign karanawa kiyana adahasa
  
  //me method ekata pass una $event eke data tika me method ekata ganna ona
  //serverData kiyana variable ekata enne event eken ewana object 
  //yata karala tyne ewagen values aragena adala key walata set karana eka
  //(key value pares hadala ewa serverElements kiyana array ekata push karanawa)
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {bluprintName: string, bluprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bluprintName,
      content: blueprintData.bluprintContent
    });
  }

  onDestroyFirst(){
    this.serverElements.pop();
  }
}
