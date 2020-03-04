using Emart.AccountServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Emart.AccountServices.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        
        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }
        /* public bool LoginBuyer(string username, string password)
         {
             Buyer buy = _context.Buyer.SingleOrDefault(i => i.BuyerUsername == username && i.BuyerPassword == password);
           if(buy.BuyerUsername==username&&buy.BuyerPassword==password)
             {
                 Console.WriteLine("Login successfull");
                 return true;
             }
             else { return false; }

         }

         public bool LoginSeller(string username, string password)
         {
             Seller sell = _context.Seller.SingleOrDefault(i => i.SellerUsername == username && i.SellerPassword == password);
             if (sell.SellerUsername == username && sell.SellerPassword == password)
             {
                 Console.WriteLine("Login successfull");
                 return true;
             }
             else
             {
                 Console.WriteLine("Login failed"); 
                 return false;
             }
         }
         */
        public Buyer LoginBuyer(string username, string password)
        {
            return _context.Buyer.SingleOrDefault(i => i.BuyerUsername == username && i.BuyerPassword == password);
        }

        public Seller LoginSeller(string username, string password)
        {
            Seller s = new Seller();
            s= _context.Seller.SingleOrDefault(i => i.SellerUsername == username && i.SellerPassword == password);
            return s;
        }
        public void RegisterBuyer(Buyer b)
        {
            _context.Buyer.Add(b);
            _context.SaveChanges();
        }

        public void RegisterSeller(Seller s)
        {
            _context.Seller.Add(s);
            _context.SaveChanges();
        }
        public List<Buyer> Get()
        {
            return _context.Buyer.ToList();
        }
        public List<Seller> GetS()
        {
            return _context.Seller.ToList();
        }
    }
}
