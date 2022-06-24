import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterGuardService } from './services/router-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hair', component: HomeComponent },
  { path: 'face', component: HomeComponent },
  { path: 'body', component: HomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [RouterGuardService]},
  { path: 'add', component: AddProductComponent, canActivate: [RouterGuardService]},
  { path: 'add/:id', component: AddProductComponent, canActivate: [RouterGuardService]},
  { path: 'login', component: LoginComponent} ,
  { path: 'register', component: RegisterComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'payment', component: OrderComponent },
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
