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
export class AdminService {
  url:string='http://localhost:54446/Admin/'

  constructor(private http:HttpClient) { 
  }
    public AddCategory(item:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',item)
  }
  public AddSubCategory(item:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',item)
  }
  public DeleteCategory(Cid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategory/'+Cid,Requestheaders);
  }
  public DeleteSubcategory(SCid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubcategory/'+SCid,Requestheaders);
  }
  public ViewCategory():Observable<any>
  {
    return this.http.get<any>(this.url+'ViewCategory',Requestheaders);
  }
  public ViewSubcategory():Observable<any>
  {
    return this.http.get<any>(this.url+'Viewsubcategory',Requestheaders);
  }

}

