using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerServices.Models;
namespace Emart.SellerServices.Repositories
{
    public interface SSIItemRepository
    {
        void AddItem(Items it);
        
        List<Items> ViewItems(int sellerid);
        void DeleteItem(int id);
        void UpdateItem(Items obj);
        Items GetItems(int itemid);
        List<Category> GetAllCategories();
        List<SubCategory> GetSub(int cid);
    }
}
