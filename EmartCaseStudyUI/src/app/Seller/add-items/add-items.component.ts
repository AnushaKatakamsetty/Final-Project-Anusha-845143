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
      Id:['',Validators.required],
      SellerId:['',Validators.required],
      CategoryId:['',Validators.required],
      SubcategoryId:['',Validators.required],
      Price:['',Validators.required],
      ItemName:['',Validators.required],
      Itemdescription:['',Validators.required],
      StockNumber:['',Validators.required],
      Remarks:['',Validators.required],
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
     this.item.Id=Number(this.itemForm.value["Id"]);
     this.item.SellerId=Number(this.itemForm.value["SellerId"]);
     this.item.CategoryId=Number(this.itemForm.value["CategoryId"]);
     this.item.CategoryId=Number(this.itemForm.value["CategoryId"]);
     this.item.SubcategoryId=Number(this.itemForm.value["SubcategoryId"]);
     this.item.ItemName=this.itemForm.value["ItemName"];
     this.item.Price=Number(this.itemForm.value["Price"]);
     this.item.Itemdescription=this.itemForm.value["Itemdescription"];
    this.item.StockNumber=Number(this.itemForm.value["StockNumber"]);
    this.item.Remarks=this.itemForm.value["Remarks"]
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
