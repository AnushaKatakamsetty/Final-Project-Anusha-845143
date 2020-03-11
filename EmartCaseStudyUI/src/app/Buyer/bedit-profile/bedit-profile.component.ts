import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-bedit-profile',
  templateUrl: './bedit-profile.component.html',
  styleUrls: ['./bedit-profile.component.css']
})
export class BEditProfileComponent implements OnInit {

  EditProfileForm: FormGroup;
  submitted = false;
  buyer:Buyer;
list:Buyer[];

  constructor(private formBuilder:FormBuilder,private service:BuyerService) {
    this.EditProfileForm=this.formBuilder.group({
                   busername:[''],
                   emailid:[''],
                   mobile:['']
               });
          }
   

ngOnInit() {
            this.GetProfile();
            }
            
GetProfile()
  {
      let id=localStorage.getItem("bid")
     this.service.GetProfile(parseInt(id)).subscribe(res=>{this.buyer=res;
    console.log(this.buyer)
      this.EditProfileForm.setValue({
      busername:this.buyer.BuyerUsername,
        emailid:this.buyer.BuyerEmailid,
         mobile:this.buyer.BuyerMobilenumber,
    })
     });
   }

  // convenience getter for easy access to form fields
  get f() { return this.EditProfileForm.controls; }

  onSubmit() {
      this.submitted = false;
       // display form values on success
      if (this.EditProfileForm.valid) {
          this.buyer.BuyerUsername=this.EditProfileForm.value["UserName"];
          this.buyer.BuyerEmailid=this.EditProfileForm.value["Emailid"];
          this.buyer.BuyerMobilenumber=this.EditProfileForm.value["MobileNumber"]
console.log(this.buyer)
this.service.EditProfile(this.buyer.BuyerId).subscribe(res=>
         {
      console.log('Updated succesfully');
            },err=>{console.log(err)}
            )
        }
     }
     onReset()
     {
 
           this.submitted=false;
           this.EditProfileForm.reset();
      
     }
}
