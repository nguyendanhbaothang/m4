import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';

import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductComponent } from './tutorial-router/product/product.component';
import { ProductsComponent } from './tutorial-router/products/products.component';

const routes: Routes = [
    { path: '',                   redirectTo: 'products', pathMatch: 'full' },
    { path: 'products',           component: ProductsComponent },
    { path: 'products/add',       component: ProductAddComponent },
    { path: 'products/:id',       component: ProductComponent },
    { path: 'products/:id/edit',  component: ProductEditComponent },
    { path: 'products/:id/delete',component: ProductDeleteComponent },
    {
      path: 'product',
      loadChildren: () => import('./product1/product.module').then(module => module.ProductModule)
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule],
    declarations: [],

  })
  export class AppRoutingModule { }
