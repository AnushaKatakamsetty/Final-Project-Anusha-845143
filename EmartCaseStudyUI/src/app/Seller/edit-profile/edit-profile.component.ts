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
          Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
         BriefAboutCompany:['',Validators.required],
         PostalAddress:['',Validators.required],
          Website:['',Validators.required],
         SellerEmailid: ['', Validators.required, Validators.email],
          SellerContactnumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
           
          
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
      this.seller.SellerUsername=this.editprofilesForm.value["SellerUsername"];
      this.seller.SellerPassword=this.editprofilesForm.value["SellerPassword"];
      this.seller.CompanyName=this.editprofilesForm.value["CompanyName"];
      this.seller.Gstin=this.editprofilesForm.value["Gstin"];
      this.seller.BriefAboutCompany=this.editprofilesForm.value["BriefAboutCompany"];
      this.seller.PostalAddress=this.editprofilesForm.value["PostalAddress"];
      this.seller.Website=this.editprofilesForm.value["Website"];
      this.seller.SellerEmailid=this.editprofilesForm.value["SellerEmailid"];
      this.seller.SellerContactnumber=this.editprofilesForm.value["SellerContactname"];
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
