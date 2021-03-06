﻿using System;
using System.Collections.Generic;

namespace Emart.AccountServices.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int SellerId { get; set; }
        public string SellerUsername { get; set; }
        public string SellerPassword { get; set; }
        public string CompanyName { get; set; }
        public int Gstin { get; set; }
        public string BriefAboutCompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string SellerEmailid { get; set; }
        public string SellerContactnumber { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
