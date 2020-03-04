using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountServices.Models;
namespace Emart.AccountServices.Repositories
{
    public interface IAccountRepository
    {
        public Buyer LoginBuyer(string username, string password);
        public Seller LoginSeller(string username, string password);
        void RegisterBuyer(Buyer b);
        void RegisterSeller(Seller s);
        List<Buyer> Get();
        List<Seller> GetS();

    }
}
