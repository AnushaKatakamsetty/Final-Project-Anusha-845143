import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editprofilesForm: FormGroup;
  submitted = false;
  seller:Seller;

  constructor(private formBuilder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
      this.editprofilesForm = this.formBuilder.group({
        SellerUsername:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          SellerPassword:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
         CompanyName:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
         briefAboutCompany:['',Validators.required],
         postalAddress:['',Validators.required],
          website:['',Validators.required],
         sellerEmailid: ['', Validators.required, Validators.email],
          sellerContactnumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
           
          
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editprofilesForm.controls; }

  
    onSubmit() {
        
        this.submitted = true;
         // display form values on success
         if (this. editprofilesForm.valid) {
          this.seller=new Seller();
          //this.seller.SellerId=Math.round(Math.random()*1000);
      this.seller.sellerUsername=this.editprofilesForm.value["sellerUsername"];
      this.seller.sellerPassword=this.editprofilesForm.value["sellerPassword"];
      this.seller.companyName=this.editprofilesForm.value["companyName"];
      this.seller.gstin=this.editprofilesForm.value["gstin"];
      this.seller.briefAboutCompany=this.editprofilesForm.value["briefAboutCompany"];
      this.seller.postalAddress=this.editprofilesForm.value["postalAddress"];
      this.seller.website=this.editprofilesForm.value["website"];
      this.seller.sellerEmailid=this.editprofilesForm.value["sellerEmailid"];
      this.seller.sellerContactnumber=this.editprofilesForm.value["sellerContactname"];
      this.service.Editprofile(this.seller).subscribe(res=>{
      console.log('Record Updated')
      },err=>{
      console.log(err)
      })
          alert('SUCCESS!! :-)\n\n') 
          // console.log(JSON.stringify(this.SignupForm.value));
      }
    }
  onReset() {
      this.submitted = false;
      this.editprofilesForm.reset();
  }
}
