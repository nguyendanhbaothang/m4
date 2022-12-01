import { Component } from '@angular/core';

@Component({
  selector: 'app-h-ng-for',
  templateUrl: './h-ng-for.component.html',
  styleUrls: ['./h-ng-for.component.css']
})
export class HNgForComponent {
  courses:string[] = [
    "typescript",
    "angular",
    "Thắng",
  ];
  constructor() {}
  ngOnInit (): void{

  }
}
