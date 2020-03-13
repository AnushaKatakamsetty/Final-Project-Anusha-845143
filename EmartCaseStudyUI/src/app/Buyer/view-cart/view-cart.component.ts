import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Item } from 'src/app/Models/item';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartlist:Cart[];
  item:Item;
    constructor(private route:Router,private service:BuyerService) {
      this.service.ViewCart().subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }
    ngOnInit() {
    }
    buy(item:Item)
    {
      console.log(item);
      localStorage.setItem('item',JSON.stringify(item));
      this.route.navigateByUrl('/buyer-landing-page/buy-product');
      
    }
  Remove(itemid:number)
  {
    console.log(itemid);
    let id=itemid;
    this.service.RemoveCartItem(id).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
    })
  }

}
