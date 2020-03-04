import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import{Seller}from '../Models/seller';
import { Item} from '../Models/item';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:63845/Seller/'

  constructor(private http:HttpClient) { }
  

 
 
  public ViewProfile(Sid:number):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+'Getprofile/'+Sid,Requestheaders);
  }
  public Editprofile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Editprofile/',seller);
  }
//   public Getcategory():Observable<Category[]>
//   {
//     return this.http.get<Category[]>(this.url+'Getcategory',Requestheaders);
//   }
//   public Getsubcategory(Cid:string):Observable<SubCategory[]>
//   {
//     return this.http.get<SubCategory[]>(this.url+'Getsubcategory/'+Cid,Requestheaders);
//   }
}