import { Component } from '@angular/core';

@Component({
  selector: 'app-g-ng-if',
  templateUrl: './g-ng-if.component.html',
  styleUrls: ['./g-ng-if.component.css']
})
export class GNgIfComponent {
  isShow: boolean = true;
  the_number: number = 11;
  constructor(){}
  ngOnInit(): void{}
}
