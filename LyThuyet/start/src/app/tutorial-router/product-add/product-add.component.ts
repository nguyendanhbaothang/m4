import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
  }

  handleSubmit(value:any):void {
    let productData:Product = {
      name: value.name,
      price: value.price,
      id: 0
    }
    this._ProductService.store(productData);

    //chuyen huong ve list
    this._Router.navigate(['/']);
   
  }

}
