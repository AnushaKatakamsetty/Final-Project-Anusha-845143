import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
category:Category[];
  constructor(private service:AdminService) { }

  ngOnInit() {
    this.ViewCategory();
  }

  // Deletecategory(cid:string):void{
  //   this.service.DeleteCategory(cid).subscribe(res=>{
  //     console.log("record deleted");
  //     this.ViewCategory();
  //   },
  //   err=>
  //   {
  //     console.log(err);
  //   })
   
  //  }
   ViewCategory():void
    {
   this.service.ViewCategory().subscribe(res=>
     {
       this.category=res;
       console.log(this.category)
     },
     err=>{
       console.log(err);
     })
   }
}
