import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  list:Item[];
 
  constructor(private service:BuyerService) { 
    
    this.service.ViewAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
  }
  ngOnInit() {
  }

}
