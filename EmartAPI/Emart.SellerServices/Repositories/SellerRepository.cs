using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerServices.Models;
using Emart.SellerServices.Repositories;
namespace Emart.SellerServices.Repositories
{
    public class SellerRepository:ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void EditProfile(Seller sell)
        {
            _context.Seller.Update(sell);
            _context.SaveChanges();
        }
        public Seller GetProfile(int sellerid)
        {
            Seller se=_context.Seller.Find(sellerid);
            return se;
        }

   }
}
