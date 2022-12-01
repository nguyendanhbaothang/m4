import { Component } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css']
})
export class BPropertyComponent {
  itemImageUrl:string = 'https://img5.thuthuatphanmem.vn/uploads/2021/11/01/100-hinh-nen-facebook-cute-de-thuong-dang-yeu-dep-nhat_013717067.jpg';
  colspan:number = 1;
  isUnchanged:boolean = false;
  constructor(){

  }
  ngOnInit(): void{
    
  }
}
