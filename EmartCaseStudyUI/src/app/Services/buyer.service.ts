import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
import { PurchaseHistory } from '../Models/purchase-history';
import { Item } from '../Models/item';
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
     return this.http.post<any>(this.url+'BuyProduct/',obj);
   }
   public SearchItems(name:string):Observable<any>
   {
     return this.http.get<any>(this.url+'SearchItems/'+name,Requestheaders);
   }
   public ViewAll():Observable<any>
   {
     return this.http.get<any>(this.url+'ViewAll',Requestheaders);
   }
}
