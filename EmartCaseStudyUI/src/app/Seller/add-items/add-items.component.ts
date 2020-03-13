import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';

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
  constructor(private frombuilder:FormBuilder ,private service:ItemService) { }

  ngOnInit() {
    this.itemForm=this.frombuilder.group({
      id:['',Validators.required],
      sellerId:['',Validators.required],
      categoryId:['',Validators.required],
      subcategoryId:['',Validators.required],
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
     this.item.id=Number(this.itemForm.value["id"]);
     this.item.sellerId=Number(this.itemForm.value["sellerId"]);
     this.item.categoryId=Number(this.itemForm.value["categoryId"]);
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
    fileEvent(event){
      this.Image = event.target.files[0].name;
  }
  
}
