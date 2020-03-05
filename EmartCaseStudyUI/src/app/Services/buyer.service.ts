import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
import { PurchaseHistory } from '../Models/purchase-history';
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
   public Search(name:string,price:number):Observable<any>
   {
     return this.http.get<any>(this.url+'SearchItems/'+name+'/'+price,Requestheaders);
   }
}
