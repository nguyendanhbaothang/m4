import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-o-ouput',
  templateUrl: './o-ouput.component.html',
  styleUrls: ['./o-ouput.component.css']
})
export class OOuputComponent {
    @Output() answerRequest = new EventEmitter<any>();
    constructor(){}
    ngOnInit(){
    }
    onClick(value:any){
      console.log('OOuputComponent::onClick: ' +value);
      this.answerRequest.emit(value);
    }
}
