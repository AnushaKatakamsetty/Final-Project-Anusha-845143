import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Models/seller';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-view-profile',
  templateUrl: './seller-view-profile.component.html',
  styleUrls: ['./seller-view-profile.component.css']
})
export class SellerViewProfileComponent implements OnInit {
seller:Seller;
submitted=false;
viewprofileform:FormGroup;
constructor(private service:SellerService,private formbuilder:FormBuilder) { 
  
  }


  ngOnInit() {this.viewprofileform=this.formbuilder.group({
  //  id:[''],
    sellerUsername:[''],
    sellerPassword:[''],
    sellerEmailid:[''],
   sellerContactnumber:[''],
companyName:[''],
gstin:[''],
briefAboutCompany:[''],
postalAddress:[''],
website:['']

  });
  this.Search();
  }
  onSubmit()
  {this.submitted=true;}
  Search()
  {
    let sell=Number(localStorage.getItem('seller'));
  
    this.service.ViewProfile(sell).subscribe(res=>{
      this.seller=res;

      console.log(res);
      
      this.viewprofileform.setValue({
                // Sid:this.seller.SellerId,
                 sellerUsername:this.seller.sellerUsername,
                 sellerPassword:this.seller.sellerPassword,
                 companyName:this.seller.companyName,
                gstin:this.seller.gstin,
                briefAboutCompany:this.seller.briefAboutCompany,
                  postalAddress:this.seller.postalAddress,
                  website:this.seller.website,
                  sellerEmailid:this.seller.sellerEmailid,
                  sellerContactnumber:this.seller.sellerContactnumber
        //        })
    })
    });
  }
  getf(){return this.viewprofileform.controls}

  Update()
  {
    //this.seller.SellerId=this.viewprofileform.value['Id'],
    this.seller.sellerUsername=this.viewprofileform.value['sellerUsername'],
    this.seller.sellerPassword=this.viewprofileform.value['sellerPassword'],
    this.seller.companyName=this.viewprofileform.value['companyName'],
    this.seller.sellerEmailid=this.viewprofileform.value['sellerEmailid'],
    this.seller.gstin=Number(this.viewprofileform.value['gstin']),
    this.seller.sellerContactnumber=this.viewprofileform.value['sellerContactnumber'],
    this.seller.briefaboutcompany=this.viewprofileform.value['breifAboutCompany'],
    this.seller.postalAddress=this.viewprofileform.value['postalAddress'],
    this.seller.website=this.viewprofileform.value['website']
    console.log(this.seller);
      this.service.Editprofile(this.seller).subscribe(res=>{
         console.log('Record Updated');
         alert('Record updated');
      },err=>{
        console.log(err);
      })

  }
  //onSearch(){
  //   let sid=this.viewprofileform.value["Sid"];
  //   this.service.ViewProfile(sid).subscribe(res=>
  //     {
  //         this.seller=res;
  //         console.log(this.seller);
  //         this.viewprofileform.setValue({
  //          Sid:this.seller.SellerId,
  //          Username:this.seller.SellerUsername,
  //          Password:this.seller.SellerPassword,
  //          Companyname:this.seller.CompanyName,
  //          Gstin:this.seller.Gstin,
  //          Briefaboutcompany:this.seller.BriefAboutCompany,
  //          Address:this.seller.PostalAddress,
  //          Website:this.seller.Website,
  //          Email:this.seller.SellerEmailid,
  //          Mobile:this.seller.SellerContactnumber
  //        })
  //     },err=>{
  //       console.log(err)
  //     })
  //}
}
