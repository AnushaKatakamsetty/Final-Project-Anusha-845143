import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  list:PurchaseHistory[]=[];
  purchasehistory:PurchaseHistory;
  item:Item;
  list1:Item[]=[];
    constructor(private service:BuyerService,private route:Router) {
      this.item=JSON.parse(localStorage.getItem('item'));
      this.list1.push(this.item)
    console.log(this.item);
    console.log(this.item.id);
    let id=localStorage.getItem('buyer');
      this.service.ViewPurchaseHistory(id).subscribe(res=>{
        this.list=res;
        console.log(this.list);
      },err=>{
        console.log(err)
      })
     }
  
  ngOnInit() {
  }
  Logout(){
  //  localStorage.clear();
    this.route.navigateByUrl('home');
  }

}
