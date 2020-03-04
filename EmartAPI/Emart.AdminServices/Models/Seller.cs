﻿using System;
using System.Collections.Generic;

namespace Emart.AdminServices.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
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
        public int SellerContactnumber { get; set; }

        public virtual ICollection<Items> Items { get; set; }
    }
}