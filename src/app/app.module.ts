import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PorductListComponent } from './porduct-list/porduct-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    AdminhomeComponent,
    // PorductListComponent,
    ProductListComponent,
    ViewCartComponent,
    OrderComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
