import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { Token } from 'src/app/Models/token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  username:string;
  password:string;
  errmsg:string;
  buyer:Buyer;
  seller:Seller;
  role: any;
  token:Token;

  constructor(private formBuilder: FormBuilder,private route:Router,private service:AccountService) { }

ngOnInit() {
  this.login = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    role:['']
});
}
// convenience getter for easy access to form fields
get f() { return this.login.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
   }

onReset() {
  this.submitted = false;
  this.login.reset();
}
public Validate()
{
let username=this.login.value['username'];
let password=this.login.value['password'];
let role=this.login.value['role'];
this.token=new Token();
// alert(username)
// alert(role)
if(role=='buyer')
{
  this.service.LoginBuyer(username,password).subscribe(res=>{
    console.log(res);
    this.token=res;
console.log(this.token);
    if(this.token.message=='success'){
      //console.log("hey");
      //localStorage.setItem('buyer',this.token.BuyerId.toString());
        this.route.navigateByUrl('/buyer-landing-page');
    }
    else{
      alert('Invalid Credentials');
    }
  });
}
if(role=='seller')
{

this.service.LoginSeller(username,password).subscribe(res=>{
console.log(res)
this.token=res;
if(this.token.message=="success"){
  localStorage.setItem('seller',JSON.stringify(this.token.SellerId));
  this.route.navigateByUrl("/seller-landing-page")
}
else{
  alert('inavlid  Credentials');
}
});
}
if(username=="admin" && password=="admin")
{
this.route.navigateByUrl("/admin-landing-page");
}
}
Navigate()
{
switch(this.role){
  case "buyer":
    this.route.navigateByUrl("buyer-landing-page");
    break;
    case "seller":
    this.route.navigateByUrl("seller-landing-page");
    break;
    case "admin":
    this.route.navigateByUrl("admin-landing-page");
    break;
    default:
      alert("invalid credentials");

}
}
//   constructor(private formbuilder:FormBuilder,private route:Router,private service:AccountService) { 
//     this.buyerlogin=new Buyer();
//     this.sellerlogin=new Seller();
//   }

//   ngOnInit() {
//     this.loginForm=this.formbuilder.group(
//       {UserName:["",Validators.required],
//     Password:["",Validators.required]
//     })
//   }
// onSubmit()
// {
//   this.submitted=true;
//   if(this.loginForm.valid)
//   {
    
//  /*if(this.buyerlogin.buyer_username=="buyer"&&this.buyerlogin.buyer_password=="buyer")
//  if(this.buyerlogin.buyer_username=="buyer"&&this.buyerlogin.buyer_password=="buyer")
//   {
//    this.errormessage="Login successfull:Buyer"; 
//   }
//   else if(this.sellerlogin.seller_username=="seller"&&this.sellerlogin.seller_password=="seller")
//   {
//     this.errormessage="Login successfull:Seller";
//   }
//   else
//   this.errormessage="invalid credentials";

// this.validate();
// if(sessionStorage.getItem('un')=='buyer'&&sessionStorage.getItem('ps')=='buyer')
// this.route.navigateByUrl('buyer-landing-page');
// else if(sessionStorage.getItem('un')=='seller'&&sessionStorage.getItem('ps')=='seller')
// this.route.navigateByUrl('seller-landing-page');
// else
// this.errormessage="not a buyer or seller";*/
// }
//   else
//   {
//     console.log("validate form");
//   }
// }
// get f(){return this.loginForm.controls}
//   onReset()
//   {
//     this.submitted=false;
//     this.loginForm.reset();
//   }

//  /* public validate()
//   {
//     if(this.uname=="buyer"&&this.pswd=="buyer")
//     {
//       sessionStorage.setItem("un",this.uname);
//       sessionStorage.setItem("ps",this.pswd);
//     //this.route.navigateByUrl('buyer-landing-page');
//     }
//     else if(this.uname=="seller"&&this.pswd=="seller")
//     {
//       sessionStorage.setItem("un",this.uname);
//       sessionStorage.setItem("ps",this.pswd);
//     //this.route.navigateByUrl('seller-landing-page');
//     }
//     else
//     {
//     this.errormessage="invalid login details";
//     }
//   }*/

//   logout()
//   {
    
//   }
//   onClickb()
//   {
//     this.route.navigateByUrl('register-buyer');
//   }
//   onClicks()
//   {
//     this.route.navigateByUrl('register-seller');
//   }
//   LoginBuyer(usname:string,paswd:string)
//   {
// let un=this.loginForm.value['UserName'];
// let ps=this.loginForm.value['Password'];
// this.service.LoginBuyer(un,ps).subscribe(res=>{this.by=res;
//   console.log("login success!");
//   this.route.navigateByUrl('/buyer-landing-page');
//   ;})
//   }
//   LoginSeller(usname:string,paswd:string)
//   {
// let un1=this.loginForm.value['UserName'];
// let ps1=this.loginForm.value['Password'];
// this.service.LoginSeller(un1,ps1).subscribe(res=>{this.sl=res;
//   console.log("login success!");
//   this.route.navigateByUrl('/seller-landing-page');
//   ;})
// //   }
// constructor(private form:FormBuilder,private service:AccountService,private route:Router) { }

//   ngOnInit() {
//     this.loginForm=this.form.group({ UserName:[''],
//          Password:[''],
//          role:['']})
//             }
//   onSubmit(){
//     this.submitted=true;
   
//   }
//   get f(){return this.loginForm.controls}
//   onReset()
//   {
//     this.submitted=false;
//     this.loginForm.reset();
//   }
// public Validate1(){
//    let UserName=this.loginForm.value['UserName'];
//   let Password=this.loginForm.value['Password'];

// if(this.role=='buyer')
// {
//   let token=new Token();
// this.service.LoginBuyer('Jack','ghjk').subscribe(res=>{token=res; console.log(token)
//   if(token.message=="success"){
//     this.role="buyer"; 
//   }
// });
// }
// if(this.role=='seller')
// {
//   let token=new Token();
// this.service.LoginSeller(UserName,Password).subscribe(res=>{token=res;console.log(token)
//   if(token.message="success"){
//     this.role="seller";
//   }
// });
// }
 
// alert(this.role)
// switch(this.role){
//   case "buyer":
//     this.route.navigateByUrl("buyer-landing-page");
//     break;
//     case "seller":
//     this.route.navigateByUrl("seller-landing-page");
//     break;
//     case "admin":
//     this.route.navigateByUrl("admin-landing-page");
//     break;
//      default:
//    alert("invalid credentials");

// }


// }
// public Validate()
// {
//   let UserName=this.loginForm.value['UserName'];
//   let Password=this.loginForm.value['Password'];
//   let role=this.loginForm.value['role'];
//   // alert(username)
//   // alert(role)
//   if(role=='buyer')
// {
//   let token=new Token();
// this.service.LoginBuyer(UserName,Password).subscribe(res=>{token=res;console.log(token)
//   if(token.message=="success"){
//     localStorage.setItem('token',token.token)
//     localStorage.setItem("BuyerId",token.BuyerId.toString());
//     // localStorage.setItem("username",this.buyer.username);
//     // localStorage.setItem("password",this.buyer.password);
//   this.route.navigateByUrl("buyerlandingpage")
//   }
//   else{
//     alert("inavlid");
//   }
// });
// }
// if(role=='seller')
// {
//  let token=new Token();
// this.service.LoginSeller(UserName,Password).subscribe(res=>{token=res;console.log(token)
//   if(token.message=="success"){
//     localStorage.setItem('token',token.token)
//     localStorage.setItem("SellerId",token.SellerId.toString());
//     // localStorage.setItem("username",this.seller.username);
//     // localStorage.setItem("password",this.seller.password);
//     this.route.navigateByUrl("sellerlandingpage")
//   }
//   else{
//     alert("inavlid");
//   }
// });

// }
// if(UserName=="Admin" && Password=="admin")
// {
//   this.route.navigateByUrl("adminlandingpage");
//  }

// // {
// //   alert("No logins founded")
// // }
// }
// Navigate()
// {
//   switch(this.role){
//     case "buyer":
//       this.route.navigateByUrl("buyerlandingpage");
//       break;
//       case "seller":
//       this.route.navigateByUrl("sellerlandingpage");
//       break;
//       case "admin":
//       this.route.navigateByUrl("adminlandingpage");
//       break;
//       default:
//         alert("invalid credentials");

//  }
// }



}

