import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from '../../model/product.model';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-admin-addfood',
  templateUrl: './admin-addfood.component.html',
  styleUrls: ['./admin-addfood.component.css']
})
export class AdminAddfoodComponent implements OnInit {

  productname: string = '';
  image: string = '';
  description: string = '';
  mrpPrice: number = 0;
  quantity: number = 0;
  isEdit: boolean = false;
  productId: any;

  constructor(

    private gService: FoodService,
    private router: Router,
    private activateRouter: ActivatedRoute


  ) {
    this.activateRouter.queryParams.subscribe((params: any) => {
      if (params?.id) {
        this.isEdit = true;
        this.gService.getProductById(params?.id).pipe(take(1)).subscribe((res:any)=> {
          if(!!res && res?.productId){
            const product :Product=res;
            this.productname= product?.productname;
            this.description=product?.description;
            this.image=product?.image;
            this.mrpPrice=product?.mrpPrice;
            this.quantity=product?.quantity;
            this.productId=product?.productId;
          }
          console.log(res);
        });
      }

    })
  }
  ngOnInit(): void {
  }

  onAddProduct(): void {

    if (this.productname === '') {
      alert("Product name is required");
      return;
    }
    if (this.description === '') {
      alert("description is required");
      return;
    }

    if (this.image === '') {
      alert("Image should not be blank");
      return;
    }
    const body: any = {
      productname: this.productname,
      image: this.image,
      description: this.description,
      mrpPrice: this.mrpPrice,
      quantity: this.quantity,

    }
    if(this.isEdit){
      console.log("=======>", body);
    this.gService.editProduct(body,this.productId).pipe(take(1)).subscribe((res: any) => {
      console.log("*****", res);
      if (res && res?.productId) {
        alert("Product updated sucessfully");
        this.router.navigate(["/admin/listproduct"]);
      }
    }, err => {
      console.log("Error  ", err);
      alert("Something went wrong!!please try again");
    })
    }else{
      console.log("=======>", body);
      this.gService.addProduct(body).pipe(take(1)).subscribe((res: any) => {
        console.log("*****", res);
        if (res && res?.productId) {
          alert("Product added sucessfully");
          this.router.navigate(["/admin/listproduct"]);
        }
      }, err => {
        console.log("Error  ", err);
        alert("Something went wrong!!please try again");
      })
    }

    

  }
}









