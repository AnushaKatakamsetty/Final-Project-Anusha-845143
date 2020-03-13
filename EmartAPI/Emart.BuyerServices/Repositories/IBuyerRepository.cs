using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerServices.Models;

namespace Emart.BuyerServices.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> SearchItems(string name);
        //void BuyItems(Transaction t);
        void EditProfile(Buyer b);
        Buyer GetProfile(int bid);
         List<PurchaseHistory> PurchaseHistrory(int bid); 
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);
        void BuyItem(PurchaseHistory obj);
        List<Items> ViewAll();
        Items ViewProductDetails(string itemname);
        void AddToCart(Cart cartobj);

        List<Cart> ViewCart();
        void RemoveCartItem(int itemid);
        List<PurchaseHistory> ViewPurchaseHistory(int bid);

    }
}
