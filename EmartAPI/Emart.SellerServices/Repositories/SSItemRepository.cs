using System;
using System.Collections.Generic;
using System.Linq;
using Emart.SellerServices.Repositories;
using System.Threading.Tasks;
using Emart.SellerServices.Models;

namespace Emart.SellerServices.Repositories
{
    public class SSItemRepository : SSIItemRepository
    {
        private readonly EmartDBContext _contx;
        public SSItemRepository(EmartDBContext contx)
        {
            _contx = contx;
        }
        public void AddItem(Items it)
        {
            _contx.Items.Add(it);
            _contx.SaveChanges();
        }

        public void DeleteItem(int id)
        {
            Items item=_contx.Items.Find(id);
            _contx.Remove(item);
            _contx.SaveChanges();
        }

        public Items GetItems(int itemid)
        {

            return _contx.Items.Find(itemid);
        }

        public void UpdateItem(Items obj)
        {
            _contx.Items.Update(obj);
            _contx.SaveChanges();
        }

        public List<Items> ViewItems(int sellerid)
        {
            List<Items> it = _contx.Items.Where(i=>i.SellerId==sellerid).ToList();
            return it;
        }
    }
}
