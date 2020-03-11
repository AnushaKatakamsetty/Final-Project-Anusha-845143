import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  list:SubCategory[];
  addsubcatform:FormGroup;
subcat:SubCategory;
submitted=false;
  constructor(private ASCBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addsubcatform=this.ASCBuilder.group(
      {
        SubcategoryName:['',Validators.required],
        CategoryId:["",Validators.required],
        BriefDetails:['',Validators.required], 
        Gstpercentage:['',Validators.required]   
    })
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.addsubcatform.valid)
    {
this.subcat=new SubCategory;
//this.subcat.SubcategoryId=Number(this.addsubcatform.value['CategoryId']);
this.subcat.SubcategoryId=Math.round(Math.random()*100);
this.subcat.SubcategoryName=this.addsubcatform.value['SubcategoryName'];
this.subcat.CategoryId=Number(this.addsubcatform.value['CategoryId'])
this.subcat.BriefDetails=this.addsubcatform.value['BriefDetails'];
this.subcat.Gstpercentage=Number(this.addsubcatform.value['Gstpercentage']);
console.log(this.subcat);
this.service.AddSubCategory(this.subcat).subscribe(res=>{
  console.log('SubCategory added')
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
  get f(){return this.addsubcatform.controls}
    onReset()
    {
      this.submitted=false;
      this.addsubcatform.reset();
    }
  }