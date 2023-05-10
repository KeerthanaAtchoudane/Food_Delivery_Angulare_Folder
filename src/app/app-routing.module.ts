import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminAddfoodComponent } from './components/admin/admin-addfood/admin-addfood.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { FoodListComponent } from './components/admin/food-list/food-list.component';
import { ClientCartComponent } from './components/client/client-cart/client-cart.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { ClientLoginPageComponent } from './components/client/client-login-page/client-login-page.component';
import { ClientOrderComponent } from './components/client/client-order/client-order.component';
import { ClientSignUpComponent } from './components/client/client-sign-up/client-sign-up.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'client-register',component: ClientSignUpComponent},
  {path:'client-login',component:ClientLoginPageComponent},
  {path:'admin-login',component:AdminLoginPageComponent},
  {path:'client',children:[
    {path:'home',component:ClientHomeComponent},
    {path:'cart',component:ClientCartComponent},
    {path:'order',component:ClientOrderComponent}
  ]},
  {path:'admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path: 'addproduct', component:AdminAddfoodComponent },
    {path:'listproduct',component:FoodListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
