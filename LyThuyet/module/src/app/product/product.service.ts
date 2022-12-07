import { Injectable } from '@angular/core';
import { Product } from "./product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  store(productData: Product) {
    throw new Error('Method not implemented.');
  }
  products: Product[] = [];
  constructor() {
    let old_products = window.localStorage.getItem('products');
    if( !old_products ){
    this.products = [
      {
        id:1,
        name:'Iphone 7',
        price:20000
      },
      {
        id:2,
        name:'Iphone 8',
        price:20000
      },
      {
        id:3,
        name:'Iphone 9',
        price:20000
      }
    ];
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }else{
    this.products = JSON.parse(old_products);
  }

  }
  getAll(): Product[]{
    return this.products;
  }
  find(idx:any): Product{
    return this.products[idx];
  }
  save(product:Product){
    this.products.push(product);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
  update(idx:number,product:Product){
    this.products[idx] = product;
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
  destroy(idx:number){
    this.products.splice(idx,1);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
}
