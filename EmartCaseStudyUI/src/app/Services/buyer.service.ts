import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
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
   
}
