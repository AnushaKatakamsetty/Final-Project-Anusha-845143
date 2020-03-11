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
    buyer:Buyer;
    list:Buyer[];
  idnum:number;
    constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
      
  }
  
    ngOnInit() {
      this.editform=this.formbuilder.group({
        buyerId:[''],
        buyerUsername:[''],
        buyerPassword:[''],
        buyerEmailid:[''],
        buyerMobilenumber:[''],
        
      });
      this.viewprofile(); 
    }
    viewprofile()
    {
        let id=Number(localStorage.getItem('buyer'));
console.log(id);
        this.service.GetProfile(id).subscribe(res=>{this.buyer=res;
        console.log(res);
        this.editform.setValue({
          buyerId:this.buyer.buyerId,
          buyerUsername:this.buyer.buyerUsername,
          buyerPassword:this.buyer.buyerPassword,
         buyerEmailid:this.buyer.buyerEmailid,
          buyerMobilenumber:this.buyer.buyerMobilenumber,
        })
      });
    }
    get f(){return this.editform.controls;}
    onSubmit()
    {
      this.submitted= true;
      if(this.editform.valid)
      {
        this.buyer.buyerId=this.editform.value["buyerId"]; 
        this.buyer.buyerUsername=this.editform.value["buyerUsername"];
        this.buyer.buyerEmailid=this.editform.value["buyerEmailid"];
        this.buyer.buyerMobilenumber=this.editform.value["buyerMobilenumber"];
       
        console.log(this.buyer)
        this.service.EditProfile(this.buyer.buyerId).subscribe(res=>
          {
            console.log('Updated succesfully');
          },err=>{console.log(err)}
    
          )
  
     
     }
    }
  
  
  }
  