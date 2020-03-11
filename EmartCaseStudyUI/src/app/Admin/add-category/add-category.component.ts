import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  list:Category[];
  addcatform:FormGroup;
cat:Category;
submitted=false;
  constructor(private ACBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addcatform=this.ACBuilder.group(
      {
        CategoryName:['',Validators.required],
        BriefDetails:['',Validators.required],    
    })
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.addcatform.valid)
    {
this.cat=new Category();
this.cat.CategoryId=Math.round(Math.random()*1000);
this.cat.CategoryName=this.addcatform.value['CategoryName'];
this.cat.BriefDetails=this.addcatform.value['BriefDetails'];
console.log(this.cat);
this.service.AddCategory(this.cat).subscribe(res=>{
  console.log('Category added')
    },err=>
  {
console.log(err);
})
    }
    else
    {
      console.log("validate form");
    }
  }
  get f(){return this.addcatform.controls}
    onReset()
    {
      this.submitted=false;
      this.addcatform.reset();
    }
}
