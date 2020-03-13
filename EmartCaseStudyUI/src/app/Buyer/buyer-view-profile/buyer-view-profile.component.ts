import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from 'src/app/Services/buyer.service';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-buyer-view-profile',
  templateUrl: './buyer-view-profile.component.html',
  styleUrls: ['./buyer-view-profile.component.css']
})
export class BuyerViewProfileComponent implements OnInit {
  editform:FormGroup;
  submitted=false;
  Buyer:Buyer;
  list:Buyer[];

  constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
    this.editform=this.formbuilder.group({
   
    buyerUsername:[''],
    buyerPassword:[''],
    buyerEmailid:[''],
    buyerMobilenumber:[''],
    
  });
}

  ngOnInit() {
    this.viewprofile(); 
  }
  viewprofile()
  {
      let id=Number(localStorage.getItem('buyer'));
      console.log(id);
      this.service.GetProfile(id).subscribe(res=>{this.Buyer=res;
      console.log(this.Buyer)
      this.editform.setValue({
       
        buyerUsername:this.Buyer.buyerUsername,
        buyerPassword:this.Buyer.buyerPassword,
       buyerEmailid:this.Buyer.buyerEmailid,
      buyerMobilenumber:this.Buyer.buyerMobilenumber,
        
      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.editform.valid)
    {
      
      this.Buyer.buyerUsername=this.editform.value["buyerUsername"];
      this.Buyer.buyerPassword=this.editform.value["buyerPassword"];
      this.Buyer.buyerEmailid=this.editform.value["buyerEmailid"];
      this.Buyer.buyerMobilenumber=this.editform.value["buyerMobilenumber"];
     
      console.log(this.Buyer)
      this.service.EditProfile(this.Buyer).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

   
   }
  }
  }
  