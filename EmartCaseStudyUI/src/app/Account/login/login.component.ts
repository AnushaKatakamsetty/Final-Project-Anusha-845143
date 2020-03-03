import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pswd:string;
loginForm:FormGroup;
submitted=false;
buyerlogin:Buyer;
errormessage:string;
sellerlogin:Seller;
by:Buyer;
sl:Seller;
  constructor(private formbuilder:FormBuilder,private route:Router,private service:AccountService) { 
    this.buyerlogin=new Buyer();
    this.sellerlogin=new Seller();
  }

  ngOnInit() {
    this.loginForm=this.formbuilder.group(
      {UserName:["",Validators.required],
    Password:["",Validators.required]
    })
  }
onSubmit()
{
  this.submitted=true;
  if(this.loginForm.valid)
  {
    
 /*if(this.buyerlogin.buyer_username=="buyer"&&this.buyerlogin.buyer_password=="buyer")
 if(this.buyerlogin.buyer_username=="buyer"&&this.buyerlogin.buyer_password=="buyer")
  {
   this.errormessage="Login successfull:Buyer"; 
  }
  else if(this.sellerlogin.seller_username=="seller"&&this.sellerlogin.seller_password=="seller")
  {
    this.errormessage="Login successfull:Seller";
  }
  else
  this.errormessage="invalid credentials";

this.validate();
if(sessionStorage.getItem('un')=='buyer'&&sessionStorage.getItem('ps')=='buyer')
this.route.navigateByUrl('buyer-landing-page');
else if(sessionStorage.getItem('un')=='seller'&&sessionStorage.getItem('ps')=='seller')
this.route.navigateByUrl('seller-landing-page');
else
this.errormessage="not a buyer or seller";*/
}
  else
  {
    console.log("validate form");
  }
}
get f(){return this.loginForm.controls}
  onReset()
  {
    this.submitted=false;
    this.loginForm.reset();
  }

 /* public validate()
  {
    if(this.uname=="buyer"&&this.pswd=="buyer")
    {
      sessionStorage.setItem("un",this.uname);
      sessionStorage.setItem("ps",this.pswd);
    //this.route.navigateByUrl('buyer-landing-page');
    }
    else if(this.uname=="seller"&&this.pswd=="seller")
    {
      sessionStorage.setItem("un",this.uname);
      sessionStorage.setItem("ps",this.pswd);
    //this.route.navigateByUrl('seller-landing-page');
    }
    else
    {
    this.errormessage="invalid login details";
    }
  }*/

  logout()
  {
    
  }
  onClickb()
  {
    this.route.navigateByUrl('register-buyer');
  }
  onClicks()
  {
    this.route.navigateByUrl('register-seller');
  }
  LoginBuyer(usname:string,paswd:string)
  {
let un=this.loginForm.value['UserName'];
let ps=this.loginForm.value['Password'];
this.service.LoginBuyer(un,ps).subscribe(res=>{this.by=res;
  console.log("login success!");
  this.route.navigateByUrl('/buyer-landing-page');
  ;})
  }
  LoginSeller(usname:string,paswd:string)
  {
let un1=this.loginForm.value['UserName'];
let ps1=this.loginForm.value['Password'];
this.service.LoginSeller(un1,ps1).subscribe(res=>{this.sl=res;
  console.log("login success!");
  this.route.navigateByUrl('/seller-landing-page');
  ;})
  }
}

