import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
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
          CompanyName:['',Validators.required],
          GSTIN:['',Validators.required],
          BriefAboutCompany:['',Validators.required],
          PostalAddress:['',Validators.required],
      Website:['',Validators.required],
      Email_Id:["",Validators.required],
      ContactNumber:["",Validators.required]
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
