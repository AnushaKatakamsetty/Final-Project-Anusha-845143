import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Item } from '../Models/item';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:54446/SSItems/'

  constructor(private http:HttpClient) { }

public AddItem(item:Item):Observable<any>
{
  return this.http.post<any>(this.url+'AddItem',item)
}
public ViewItems(sellerid:number):Observable<any>
{
  return this.http.get<any>(this.url+'ViewItems/'+JSON.stringify(sellerid),Requestheaders);
}
public UpdateItem(items:Item):Observable<any>
{ 
   return this.http.put<any>(this.url+'UpdateItem',items,Requestheaders);
}
public DeleteItem(id:any):Observable<any>
{
   return this.http.delete<any>(this.url+'DeleteItem/'+id,Requestheaders)
}
public GetById(id:number):Observable<Item>
{
  return this.http.get<Item>(this.url+'GetById/'+id,Requestheaders)
}
public GetAllCategories():Observable<Category[]>
{
  return this.http.get<Category[]>(this.url+'GetAllCategories',Requestheaders)
}
public GetSub(id:any):Observable<SubCategory[]>
{
  return this.http.get<SubCategory[]>(this.url+'GetSub/'+id,Requestheaders)
}
}