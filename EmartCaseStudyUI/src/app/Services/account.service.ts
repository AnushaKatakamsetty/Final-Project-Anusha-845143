import { Injectable } from '@angular/core';
import{HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({'content-type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string="http://localhost:54446/Account/";

  constructor(private http:HttpClient) {
   }
   public LoginBuyer(BuyerUsername:string,BuyerPassword:string):Observable<any>
   {
     return this.http.get<any>(this.url+'LoginBuyer/'+BuyerUsername+'/'+BuyerPassword,Requestheaders)
   }
   public LoginSeller(SellerUsername:string,SellerPassword:string):Observable<any>
   {
     return this.http.get<any>(this.url+'LoginSeller/'+SellerUsername+'/'+SellerPassword,Requestheaders) 
   }
   public RegisterBuyer(buyer:Buyer):Observable<Buyer>
   {
     return this.http.post<Buyer>(this.url+'RegisterBuyer/',buyer);
   }
   public RegisterSeller(seller:Seller):Observable<Seller>
   {
     return this.http.post<Seller>(this.url+'RegisterSeller/',seller);
   }
}
