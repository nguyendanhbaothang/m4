import { Component } from '@angular/core';

@Component({
  selector: 'app-m-template-variable',
  templateUrl: './m-template-variable.component.html',
  styleUrls: ['./m-template-variable.component.css']
})
export class MTemplateVariableComponent {
constructor(){}
ngOnInit():void{}
callPhone(phone:any):void{
  console.log(phone);

}
}
