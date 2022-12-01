import { Component } from '@angular/core';

@Component({
  selector: 'app-j-ng-class',
  templateUrl: './j-ng-class.component.html',
  styleUrls: ['./j-ng-class.component.css']
})
export class JNgClassComponent {
isList: boolean = true ;
setClasses(){
  return{
    'glyphicon-th': !this.isList,
    'glyphicon-th-list': this.isList,
  }
}
}
