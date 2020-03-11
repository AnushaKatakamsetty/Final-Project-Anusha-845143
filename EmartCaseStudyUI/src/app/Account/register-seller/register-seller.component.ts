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
     
    }
  
    ngOnInit() {
      this.sellerregister=new Seller();
      this.registerForm=this.formbuilder.group(
        { 
          
          sellerUsername:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
        sellerPassword:['',Validators.required],
       companyName:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
        gstin:['',Validators.required],
       briefAboutCompany:['',Validators.required],
       postalAddress:['',Validators.required],
        website:['',Validators.required],
       sellerEmailid: ['', Validators.required],
        sellerContactnumber:['',Validators.required]
      })
    }
  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid)
    {
      this.sellerregister=new Seller();
      
this.sellerregister.sellerId=Math.round(Math.random()*1000);
 this.sellerregister.sellerUsername=(this.registerForm.value["sellerUsername"]);
      this.sellerregister.sellerPassword=(this.registerForm.value["sellerPassword"]);
      this.sellerregister.companyName=(this.registerForm.value["companyName"]);
      this.sellerregister.gstin=Number(this.registerForm.value["gstin"]);
      this.sellerregister.briefAboutCompany=(this.registerForm.value["briefAboutCompany"]);
      this.sellerregister.postalAddress=(this.registerForm.value["postalAddress"]);
      this.sellerregister.website=(this.registerForm.value["website"]);
      this.sellerregister.sellerEmailid=(this.registerForm.value["sellerEmailid"]);
      this.sellerregister.sellerContactnumber=Number(this.registerForm.value["sellerContactnumber"]);
      
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
