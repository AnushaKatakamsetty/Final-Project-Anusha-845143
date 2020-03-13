import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Item } from 'src/app/Models/item';
import { Router } from '@angular/router';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  list:Item;
  it:Item;
  id1:number;
// buyform:FormGroup;
//   list:Item;
//   ph:PurchaseHistory;
//   constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) { 
    // let itemname=localStorage.getItem('itemnm');
    // this.service.ViewProductDetails(itemname).subscribe(res=>{``
    //   this.list=res;
    //   //localStorage.setItem('item1',)
    //   console.log(this.list);
    // })
//   }
// ngOnInit() {
//   this.buyform=this.formBuilder.group({
//     transactiontype:[''],
//     cardnumber:[''],
//     cvv:[''],
//     ed:[''],
//     name:[''],
//     // date:[''],
//     numberofitems:[''],
//     remarks:['']

//    })
//    this.list=JSON.parse(localStorage.getItem('item1'));
//    console.log(this.list);
//    console.log(this.list.Id);

//   }
//   Logout(){
//     localStorage.clear();
//     this.route.navigateByUrl('/login')
//   }
//   BuyProduct()
//   {

//     this.service.BuyItem(this.ph).subscribe(res=>{
//       this.ph=res;
//       console.log(this.ph)
//     })
//   }
buyproductform:FormGroup;
constructor(private service :BuyerService,private formBuilder:FormBuilder,private route:Router) { 
  let itemname=localStorage.getItem('itemnm');
    this.service.ViewProductDetails(itemname).subscribe(res=>{
      this.list=res;
       console.log(this.list);
       this.it=res;
      
    })
}
item:Item;
obj:PurchaseHistory;

ngOnInit() {
  this.buyproductform=this.formBuilder.group({
   transactionType:[''],
   cardnumber:[''],
   cvv:[''],
   ed:[''],
   name:[''],
   dateTime:[''],
   noOfItems:[''],
   itemId:[''],
   remarks:['']

  })
  //this.item=JSON.parse(localStorage.getItem('item'));
  //console.log(this.item);
  //console.log(this.item.Id);

}
Onsubmit()
{
 
 this.obj=new PurchaseHistory();
 this.obj.purchaseHistoryId='PH'+Math.round(Math.random()*1000);
 this.obj.buyerId=Number(localStorage.getItem('buyer'));
 this.obj.sellerId=this.it.sellerId;
 this.obj.noOfItems=this.buyproductform.value["noOfItems"];
 this.obj.itemId=this.it.id;
 this.obj.transactionId='TID'+Math.round(Math.random()*1000);
 this.obj.transactionType=this.buyproductform.value["transactionType"];
 this.obj.dateTime=this.buyproductform.value['dateTime']
 this.obj.remarks=this.buyproductform.value["remarks"];
 console.log(this.obj);
 this.service.BuyItem(this.obj).subscribe(res=>{
   console.log("Purchase was Sucessfull");
   alert('Purchase Done Successfully');
 })
}
Logout(){
 localStorage.clear();
 this.route.navigateByUrl('/login');
}
}
