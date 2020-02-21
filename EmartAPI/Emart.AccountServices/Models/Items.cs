using System;
using System.Collections.Generic;

namespace Emart.AccountServices.Models
{
    public partial class Items
    {
        public int Id { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public decimal Price { get; set; }
        public string ItemName { get; set; }
        public string Itemdescription { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }

        public virtual Category Category { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
