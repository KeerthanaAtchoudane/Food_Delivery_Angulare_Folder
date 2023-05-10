import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Order } from '../../model/order.model';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {
  orderList: Order[]=[];
  constructor(
    private gService: FoodService,
    private router: Router,
    private datePipe : DatePipe
  ) { 
    
  }

  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList():void{
    this.gService.orderList(this.gService.getClientAuthorization()).pipe(take(1)).subscribe(
      (res: any) => {
        console.log("************",res);
        if(!!res && Array.isArray(res)){
          this.orderList=res;
        }
        
      }, err => {
        console.log("Error");
      }
    )
  }
  getDate(d:string|undefined):any{
    //return  !!d ? this.datePipe.transform(new Date(d),"" )?.toString(): "";
    //return this.datePipe.transform(d,"").toString();
    let ans :any;
    console.log("DDDDDD",d);
    if(!!d && d!== null){
      ans=this.datePipe.transform(d,"shortDate")||null;
      console.log("@@@@@@@@",ans);
    }
    return ans;
  }
  

}
