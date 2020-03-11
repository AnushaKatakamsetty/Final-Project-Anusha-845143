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
// buyform:FormGroup;
//   list:Item;
//   ph:PurchaseHistory;
//   constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) { 
//     let itemname=localStorage.getItem('itemnm');
//     this.service.ViewProductDetails(itemname).subscribe(res=>{``
//       this.list=res;
//       //localStorage.setItem('item1',)
//       console.log(this.list);
//     })
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
buyform:FormGroup;
constructor(private service :BuyerService,private formBuilder:FormBuilder,private route:Router) { }
item:Items;
obj:PurchaseHistory;

ngOnInit() {
  this.buyform=this.formBuilder.group({
   transactiontype:[''],
   cardnumber:[''],
   cvv:[''],
   ed:[''],
   name:[''],
   // date:[''],
   numberofitems:[''],
   remarks:['']

  })
  this.item=JSON.parse(localStorage.getItem('item1'));
  console.log(this.item);
  console.log(this.item.id);

}
Onsubmit()
{
 this.obj=new PurchaseHistory();
 this.obj.id='EMTR'+Math.round(Math.random()*1000);
 this.obj.Buyerid=localStorage.getItem('buyerid');
 this.obj.Sellerid=this.item.sellerid;
 this.obj.numberofitems=this.buyform.value["numberofitems"];
 this.obj.Itemid=this.item.id;
 this.obj.Transactiontype=this.buyform.value["transactiontype"];
 // this.obj.Datetime=this.buyform.value["date"];
 this.obj.remarks=this.buyform.value["remarks"];
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
