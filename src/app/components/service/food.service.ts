import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url: string = 'http://localhost:8089';

  constructor(
    
    private http: HttpClient,
    private router: Router

  ) { }
  

  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //client login
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }

storeClientAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

getClientAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
}

clientLogout(): void {
  localStorage.clear();
  this.router.navigate(['']);
}
//admin login
adminSignIn(body: any): Observable<any> {
  return this.http.post(this.url + "/api/admin/login", body);
}
storeAdminAuthorization(token: string): void {
  localStorage.setItem("admin", token);
}
getAdminAuthorization(): any {
  const token = localStorage.getItem("admin");
  return token; 
}

adminLogout(): void {
  localStorage.clear();
  this.router.navigate(['/']);
}

addProduct(body: any): Observable<any> {
  return this.http.post(this.url + "/api/products/add products", body);
}

getProductlist():Observable<any> {
  return this.http.get(this.url + "/api/products");
}

deleteProduct(id :any):Observable<any> {
  //return this.http.delete(this.url + "/api/products/" +id);
  //secondway
  return this.http.delete(`${this.url}/api/products/${id}`);
}

getProductById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/products/products/"+id);
}

editProduct(body: any,id:any): Observable<any> {
  return this.http.put(this.url + "/api/products/"+id, body);
}

addToCart(body: any,pid:any,cid:any):Observable<any>{
  return this.http.post(this.url+"/api/cart/"+cid+"/"+pid,body);
}

getCustomerById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/customers/customer/"+id);
}

cartList():Observable<any>{
  return this.http.get(this.url+"/api/cart/list");
}
placeOrder(cid:any,cartid:any,body:any):Observable<any> {
  return this.http.post(this.url + "/api/orders/"+cid+"/"+cartid, body);
}
deleteCart(id :any):Observable<any> {
  
  return this.http.delete(`${this.url}/api/cart/${id}`);
}

orderList(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/"+id);
}




}
