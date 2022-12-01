import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Hello Angular 123';
  age:number = 19;
appComponentAnswer( event:any): void{
  console.log('AppComponent::appComponentAnswer: '+event);
}
}
