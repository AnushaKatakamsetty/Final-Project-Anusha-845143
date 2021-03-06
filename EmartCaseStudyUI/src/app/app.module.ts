import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { SellerViewProfileComponent } from './Seller/seller-view-profile/seller-view-profile.component';
import { BuyerViewProfileComponent } from './Buyer/buyer-view-profile/buyer-view-profile.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Account/account/account.component';
import {HttpClientModule} from  '@angular/common/http';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    SellerViewProfileComponent,
    BuyerViewProfileComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AdminLandingPageComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    BuyProductComponent,
    HomeComponent,
    AccountComponent,
  
    ViewCategoryComponent,
    ViewSubCategoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
