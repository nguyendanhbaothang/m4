import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'start';
  age:number = 19;
  hasMoney: boolean = true;
  book:any[] = ['Văn','Sử','Địa'];
}
