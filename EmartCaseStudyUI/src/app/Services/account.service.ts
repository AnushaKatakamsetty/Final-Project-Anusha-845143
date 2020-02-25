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
   public LoginBuyer(busername:string,bpassword:string):Observable<Buyer>
   {
     return this.http.get<Buyer>(this.url+'LoginBuyer/'+busername+bpassword,Requestheaders)
   }
   public LoginSeller(susername:string,spassword:string):Observable<Seller>
   {
     return this.http.get<Seller>(this.url+'LoginSeller/'+susername+spassword,Requestheaders) 
   }
   public RegisterBuyer(buyer:Buyer):Observable<Buyer>
   {
     return this.http.post<Buyer>(this.url+'RegisterBuyer/',JSON.stringify(buyer));
   }
   public RegisterSeller(seller:Seller):Observable<Seller>
   {
     return this.http.post<Seller>(this.url+'RegisterSeller/',JSON.stringify(seller));
   }
}
