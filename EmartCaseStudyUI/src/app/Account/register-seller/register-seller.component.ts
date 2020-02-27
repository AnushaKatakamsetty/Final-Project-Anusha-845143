import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
registerForm:FormGroup;
  submitted=false;
 
  errormessage:string;
  sellerregister:Seller;
    constructor(private formbuilder:FormBuilder,private route:Router,private service:AccountService) { 
     
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
      this.sellerregister=new Seller();
      this.sellerregister.seller_id=Number(this.registerForm.value["Id"]);
      this.sellerregister.seller_username=(this.registerForm.value["UserName"]);
      this.sellerregister.seller_password=(this.registerForm.value["Password"]);
      this.sellerregister.company_name=(this.registerForm.value["CompanyName"]);
      this.sellerregister.GSTIN=Number(this.registerForm.value["GSTIN"]);
      this.sellerregister.brief_about_company=(this.registerForm.value["Email_Id"]);
      this.sellerregister.postal_address=(this.registerForm.value["Email_Id"]);
      this.sellerregister.seller_emailid=(this.registerForm.value["Email_Id"]);
      this.sellerregister.seller_contactnumber=Number(this.registerForm.value["Mobile_Number"]);
      
      console.log(this.sellerregister);
      this.service.RegisterSeller(this.sellerregister).subscribe(res=>{
        console.log('seller Registration Success')
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
