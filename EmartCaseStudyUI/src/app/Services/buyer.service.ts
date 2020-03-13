import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
import { PurchaseHistory } from '../Models/purchase-history';
import { Item } from '../Models/item';
import { Buyer } from '../Models/buyer';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
url:string="http://localhost:54446/Buyer/"
  constructor(private http:HttpClient) {
   }
   public BuyItem(obj:PurchaseHistory):Observable<any>
   {
     return this.http.post<any>(this.url+'BuyProduct',obj,Requestheaders);
   }
   public SearchItems(name:string):Observable<any>
   {
     return this.http.get<any>(this.url+'SearchItems/'+name,Requestheaders);
   }
   public ViewAll():Observable<any>
   {
     return this.http.get<any>(this.url+'ViewAll',Requestheaders);
   }
   public ViewCart():Observable<any>
   {
     return this.http.get<any>(this.url+'ViewCart',Requestheaders);
   }
   public ViewProductDetails(itemname:string):Observable<Item>
   {
     return this.http.get<Item>(this.url+'ViewProductDetails/'+itemname,Requestheaders)
   }
   public GetProfile(bid:any):Observable<Buyer>
   {
     return this.http.get<Buyer>(this.url+'GetProfile/'+bid,Requestheaders);
   }
   public EditProfile(buyer:Buyer):Observable<Buyer>
   {
     return this.http.put<Buyer>(this.url+'EditProfile',buyer,Requestheaders);
   }
   public AddToCart(cart:Cart):Observable<Cart>
   {
     return this.http.post<Cart>(this.url+'AddToCart',cart,Requestheaders);
   }
   public RemoveCartItem(itemid:number):Observable<any>
   {
     return this.http.delete<Cart>(this.url+'RemoveCartItem/'+itemid,Requestheaders);
   }
   public ViewPurchaseHistory(id:any):Observable<any>
{
  return this.http.get<any>(this.url+'ViewPurchaseHistory/'+id,Requestheaders);
}
}
