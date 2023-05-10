import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from '../../model/product.model';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  //Product is comming from model class line and line 14 meaning same
 //productList: Product[]= [];
  productList : Array<Product>= [];
  constructor(
    private gService:FoodService,
    private router:Router
  ) { 
    this.getProductList();
  }

  ngOnInit(): void {
  }
getProductList(): void {
    this.gService.getProductlist().pipe(take(1)).subscribe(
      (res: any) => {
        console.log("*******",res);
        if(!!res && Array.isArray(res)){
          this.productList= res;
        }
      }, err =>{
        console.log("Error");
      }
    )
}
delProduct(product: Product): void {
  this.gService.deleteProduct(product?.productId).pipe(take(1)).subscribe(
    (res:any)=>{
      alert("Product deleted sucessfully");
      this.getProductList();
    }, err =>{
        console.log("Error");
      }
  )
}
editProduct(product:Product):void{
  this.router.navigate(['/admin/addproduct'], { queryParams: {
    id: product?.productId
  }});

}

}
