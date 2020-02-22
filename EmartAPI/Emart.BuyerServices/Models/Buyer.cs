using System;
using System.Collections.Generic;

namespace Emart.BuyerServices.Models
{
    public partial class Buyer
    {
        public int BuyerId { get; set; }
        public string BuyerUsername { get; set; }
        public string BuyerPassword { get; set; }
        public string BuyerEmailid { get; set; }
        public int BuyerMobilenumber { get; set; }
        public DateTime Createdatetime { get; set; }
    }
}
