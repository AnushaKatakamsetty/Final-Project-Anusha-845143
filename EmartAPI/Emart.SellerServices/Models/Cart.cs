using System;
using System.Collections.Generic;

namespace Emart.SellerServices.Models
{
    public partial class Cart
    {
        public string Cartid { get; set; }
        public int? Itemid { get; set; }
        public string Itemname { get; set; }
        public int? Sellerid { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public int? Buyerid { get; set; }
        public decimal Price { get; set; }
        public string Itemdescription { get; set; }
        public int Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
