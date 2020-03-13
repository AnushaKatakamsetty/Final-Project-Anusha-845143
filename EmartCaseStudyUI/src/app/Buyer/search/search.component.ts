import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Item } from 'src/app/Models/item';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cart:Cart;
  list:Item[];
  item:Item;
  itemName:string;
  constructor(private service:BuyerService, private route:Router) { 
    this.service.ViewAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
  }

  ngOnInit() {
  }
  Search(){
    
    this.service.SearchItems(this.itemName).subscribe(res=>{
      localStorage.setItem('itemnm',this.itemName);
      this.list=res;
      console.log("success");
      console.log(this.list);
      localStorage.setItem('item',JSON.stringify(this.list));
      
     
      })
    }
    Buy(item:Item)
    {
    localStorage.setItem('item5',JSON.stringify(item));
      this.route.navigateByUrl('/buyer-landing-page/buy-product');
    }
    AddToCart(item2:Item)
    {
      console.log('addtocart works');
        console.log(item2);
       this.cart=new Cart();
       this.cart.cartid='PH'+Math.round(Math.random()*100);
       this.cart.itemid=item2.id;
       this.cart.itemname=item2.itemName;
       this.cart.categoryId=item2.categoryId;
       this.cart.subcategoryId=item2.subcategoryId
       this.cart.stocknumber=item2.stockNumber;
       this.cart.price=item2.price;
       this.cart.itemdescription=item2.itemdescription;
       this.cart.remarks=item2.remarks;
       this.cart.sellerid=item2.sellerId;
       this.cart.image=item2.image;
       this.cart.buyerid=Number(localStorage.getItem('buyer'));
       console.log(this.cart);
       this.service.AddToCart(this.cart).subscribe(res=>{
         console.log("Record added To Cart");
         alert('Item has been Added To Cart');
       })
    }
    
}
