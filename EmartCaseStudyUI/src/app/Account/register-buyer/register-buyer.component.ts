import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;
 buyerregister:Buyer;
  errormessage:string;
  sellerregister:Seller;
    constructor(private formbuilder:FormBuilder,private route:Router,private service:AccountService) { 
      this.buyerregister=new Buyer();
      this.sellerregister=new Seller();
    }
  
    ngOnInit() {
      this.registerForm=this.formbuilder.group(
        {
          buyerUsername:["",Validators.required],
      buyerPassword:["",Validators.required],
      buyerEmailid:["",Validators.required],
     buyerMobilenumber:["",Validators.required],
      createdatetime:["",Validators.required]
      })
    }
  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid)
    {
      this.buyerregister=new Buyer();
      this.buyerregister.buyerId=Math.round(Math.random()*1000);
this.buyerregister.buyerUsername=(this.registerForm.value["buyerUsername"]);
this.buyerregister.buyerPassword=(this.registerForm.value["buyerPassword"]);
this.buyerregister.buyerEmailid=(this.registerForm.value["buyerEmailid"]);
this.buyerregister.buyerMobilenumber=this.registerForm.value["buyerMobilenumber"];
this.buyerregister.createdatetime=(this.registerForm.value["createdatetime"]);

console.log(this.buyerregister);
this.service.RegisterBuyer(this.buyerregister).subscribe(res=>{
  console.log('Buyer Registration Success')
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
  get f(){return this.registerForm.controls}
    onReset()
    {
      this.submitted=false;
      this.registerForm.reset();
    }

}
