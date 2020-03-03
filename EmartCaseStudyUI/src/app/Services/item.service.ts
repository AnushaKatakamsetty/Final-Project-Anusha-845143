import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Item } from '../Models/item';
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
public ViewItems():Observable<any>
{
  return this.http.get(this.url+'ViewItems',Requestheaders);
}
public UpdateItem(items:Item):Observable<any>
{
   
   return this.http.put<any>(this.url+'UpdateItem',JSON.stringify(items),Requestheaders)
}
public DeleteItem(id:number):Observable<any>
{
   
   return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders)
}
public GetById(id:number):Observable<Item>
{
  return this.http.get<Item>(this.url+'GetById/'+id,Requestheaders)
}
}