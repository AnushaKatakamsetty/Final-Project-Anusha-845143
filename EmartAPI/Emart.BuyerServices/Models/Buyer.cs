using System;
using System.Collections.Generic;

namespace Emart.BuyerServices.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int BuyerId { get; set; }
        public string BuyerUsername { get; set; }
        public string BuyerPassword { get; set; }
        public string BuyerEmailid { get; set; }
        public string BuyerMobilenumber { get; set; }
        public DateTime Createdatetime { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
