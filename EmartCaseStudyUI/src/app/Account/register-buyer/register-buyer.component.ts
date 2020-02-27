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
        {Id:["",Validators.required],
          UserName:["",Validators.required],
      Password:["",Validators.required],
      Email_Id:["",Validators.required],
      Mobile_Number:["",Validators.required],
      CreateDateTime:["",Validators.required]
      })
    }
  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid)
    {
      this.buyerregister=new Buyer();
this.buyerregister.BuyerId=Number(this.registerForm.value["Id"]);
this.buyerregister.BuyerUsername=(this.registerForm.value["UserName"]);
this.buyerregister.BuyerPassword=(this.registerForm.value["Password"]);
this.buyerregister.BuyerEmailid=(this.registerForm.value["Email_Id"]);
this.buyerregister.BuyerMobilenumber=Number(this.registerForm.value["Mobile_Number"]);
this.buyerregister.Createdatetime=(this.registerForm.value["CreateDateTime"]);

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
