using System;
using System.Collections.Generic;

namespace Emart.AdminServices.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public int? SellerId { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public decimal Price { get; set; }
        public string ItemName { get; set; }
        public string Itemdescription { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
