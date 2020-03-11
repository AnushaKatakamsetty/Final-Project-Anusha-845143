import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Item } from 'src/app/Models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list:Item[];
  constructor(private service:BuyerService, private route:Router) { 
    this.service.ViewAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
  }

  ngOnInit() {
  }
  Search(itemname:string){
    
    this.service.SearchItems(itemname).subscribe(res=>{
      localStorage.setItem('itemnm',itemname);
      this.list=res;
      console.log("success");
      console.log(this.list);
     
      })
    }
    Buy()
    {
      this.route.navigateByUrl('/buyer-landing-page/buy-product');
    }
}
