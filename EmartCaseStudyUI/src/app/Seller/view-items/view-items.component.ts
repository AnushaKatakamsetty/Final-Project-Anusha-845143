import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from 'src/app/Models/item';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list:Item[];
  item:Item;
  seller:Seller
  constructor(private service:ItemService,private formBuilder:FormBuilder) { 
    this.service.ViewItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit(){}

  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Update()
  {
    this.item=new Item();
    this.item.Id=this.itemForm.value["id"];
    this.item.CategoryId=this.itemForm.value["categoryId"];
    this.item.SubcategoryId=this.itemForm.value["subcategoryId"];
    this.item.Price=Number(this.itemForm.value["price"]);
    this.item.ItemName=this.itemForm.value["itemName"];
    this.item.Itemdescription=this.itemForm.value["itemdescription"];
    this.item.StockNumber=Number(this.itemForm.value["stockNumber"]);
    this.item.Remarks=this.itemForm.value["remarks"];
    this.item.SellerId=this.itemForm.value["sellerId"];
    console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
  }
  Delete(id:number){
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }

}
