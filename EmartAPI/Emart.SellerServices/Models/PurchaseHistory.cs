using System;
using System.Collections.Generic;

namespace Emart.SellerServices.Models
{
    public partial class PurchaseHistory
    {
        public string PurchaseHistoryId { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public string TransactionId { get; set; }
        public string TransactionType { get; set; }
        public int? ItemId { get; set; }
        public int NoOfItems { get; set; }
        public DateTime DateTime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
