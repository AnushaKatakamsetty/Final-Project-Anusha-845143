import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Models/seller';
import { FormGroup } from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-view-profile',
  templateUrl: './seller-view-profile.component.html',
  styleUrls: ['./seller-view-profile.component.css']
})
export class SellerViewProfileComponent implements OnInit {
seller:Seller;
viewprofileform:FormGroup;
constructor(private service:SellerService) { 
  let sell=localStorage.getItem('seller');
  //console.log('sellerid'+sell);
    this.service.ViewProfile(parseInt(sell)).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
      this.viewprofileform.setValue({
        //          Sid:this.seller.SellerId,
                 Username:this.seller.SellerUsername,
        //          Password:this.seller.SellerPassword,
                 Companyname:this.seller.CompanyName,
        //          Gstin:this.seller.Gstin,
        //          Briefaboutcompany:this.seller.BriefAboutCompany,
                  Address:this.seller.PostalAddress,
                  Website:this.seller.Website,
                  Email:this.seller.SellerEmailid,
                  Mobile:this.seller.SellerContactnumber
        //        })
    })
    });
  }


  ngOnInit() {
  }
  // onSearch(){
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
