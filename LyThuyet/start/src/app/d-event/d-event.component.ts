import { Component } from '@angular/core';

@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent {
  title:string = '';
  clickMe1(): void{
    console.log('clickMe1');
  }
  clickMe2():void{
    console.log(event);
  }
  btnClick(): void{
    let objEvent = event;
    console.log(objEvent);
  }
  divClick(): void{
    console.log(event);
  }
  onKeyUp(event:any): void {
    let tag = event.target.value;
   this.title = tag

  }
}
