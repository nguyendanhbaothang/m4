import { Component } from '@angular/core';

@Component({
  selector: 'app-c-claas',
  templateUrl: './c-claas.component.html',
  styleUrls: ['./c-claas.component.css']
})
export class CClaasComponent {
  onSale: boolean =true;
  classExpression:Array<string> = ['văn','Sử'];
  actionName:string = 'Thắng';
  expression:string = 'reb';
  Do: boolean = true;
  constructor(){}
    ngOnInit(): void{

  }
}
