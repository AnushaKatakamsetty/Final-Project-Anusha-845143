import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { createNgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  list:Item[];
  itemForm:FormGroup;
  submitted=false;
  item:Item;
  Image:string;
  clist:Category[];
  sclist:SubCategory[];
  catid:number;
  constructor(private frombuilder:FormBuilder ,private service:ItemService) { 
    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
  }

  ngOnInit() {
    this.itemForm=this.frombuilder.group({
      id:[''],
      sellerId:[''],
      categoryId:[''],
      subcategoryId:[''],
      price:['',Validators.required],
      itemName:['',Validators.required],
      itemdescription:['',Validators.required],
      stockNumber:['',Validators.required],
      remarks:['',Validators.required],
    });
  }
    get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Add()
  {
     this.item=new Item();
    //  this.item.id=Number(this.itemForm.value["id"]);
     this.item.id=Math.round(Math.random()*1000);
    //  this.item.sellerId=Number(this.itemForm.value["sellerId"]);
    this.item.sellerId=Number(localStorage.getItem('seller'));
          this.item.categoryId=Number(this.itemForm.value["categoryId"]);
    
      this.item.subcategoryId=Number(this.itemForm.value["subcategoryId"]);
     this.item.itemName=this.itemForm.value["itemName"];
     this.item.price=Number(this.itemForm.value["price"]);
     this.item.itemdescription=this.itemForm.value["itemdescription"];
    this.item.stockNumber=Number(this.itemForm.value["stockNumber"]);
    this.item.remarks=this.itemForm.value["remarks"]
    this.item.image=this.Image;
     console.log(this.item);
     this.service.AddItem(this.item).subscribe(res=>{
       
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })
    }
    GetSubCategory()
    {
      let cid=Number(this.itemForm.value['categoryId']);
      console.log(cid);
      this.service. GetSub(cid).subscribe(res=>{
        this.sclist=res;
        console.log(this.sclist);
      })
    }
    fileEvent(event){
      this.Image = event.target.files[0].name;
  }
  
}
