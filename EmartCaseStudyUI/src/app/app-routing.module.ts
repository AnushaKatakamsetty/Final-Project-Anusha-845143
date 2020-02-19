
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { BuyerViewProfileComponent } from './Buyer/buyer-view-profile/buyer-view-profile.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { Seller } from './Models/seller';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { SellerViewProfileComponent } from './Seller/seller-view-profile/seller-view-profile.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Account/account/account.component';
import { BEditProfileComponent } from './Buyer/bedit-profile/bedit-profile.component';
import { EditProfileComponent } from './Seller/edit-profile/edit-profile.component';

const routes: Routes = [{path:'home',component:HomeComponent,
children:[{path:'login',component:LoginComponent}]},
 {path:'account',component:AccountComponent}, {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent},

  {path:'admin-landing-page',component:AdminLandingPageComponent,children:[
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-sub-category',component:AddSubCategoryComponent},
    {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
    {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
    {path:'daily-reports',component:DailyReportsComponent}
  ]},
  {path:'buyer-landing-page',component:BuyerLandingPageComponent,children:[
    {path:'bedit-profile',component:BEditProfileComponent},
    {path:'buy-product',component:BuyProductComponent},
    {path:'buyer-view-profile',component:BuyerViewProfileComponent},
    {path:'purchase-history',component:PurchaseHistoryComponent},
    {path:'search',component:SearchComponent},
    {path:'view-cart',component:ViewCartComponent}
  ]},{path:'seller-landing-page',component:SellerLandingPageComponent,children:[
    {path:'edit-profile',component:EditProfileComponent},
    {path:'add-items',component:AddItemsComponent},
    {path:'seller-view-profile',component:SellerViewProfileComponent},
  {path:'view-items',component:ViewItemsComponent},
  {path:'view-reports',component:ViewReportsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
