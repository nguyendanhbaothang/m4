import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-n-input',
  templateUrl: './n-input.component.html',
  styleUrls: ['./n-input.component.css']
})
export class NInputComponent {
  @Input('item') item:string | undefined;
  constructor(){}
  ngOnInit(): void{
    console.log(this.item);

  }
}
