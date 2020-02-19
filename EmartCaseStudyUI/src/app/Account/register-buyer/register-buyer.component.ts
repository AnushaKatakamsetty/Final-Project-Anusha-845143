import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
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
    constructor(private formbuilder:FormBuilder,private route:Router) { 
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
