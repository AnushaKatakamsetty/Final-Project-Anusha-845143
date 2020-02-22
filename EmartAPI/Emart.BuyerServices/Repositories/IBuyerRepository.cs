using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerServices.Models;

namespace Emart.BuyerServices.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> SearchItems(string name,decimal price);
        //void BuyItems(Transaction t);
        void EditProfile(Buyer b);
        Buyer GetProfile(int bid);
        // List<Transaction> TransactionHistrory(int bid); 
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);

    }
}
