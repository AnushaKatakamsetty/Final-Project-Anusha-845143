using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountServices.Models;
namespace Emart.AccountServices.Repositories
{
    public interface IAccountRepository
    {
        bool LoginBuyer(string username, string password);
        bool LoginSeller(string username, string password);
        void RegisterBuyer(Buyer b);
        void RegisterSeller(Seller s);
        List<Buyer> Get();
        List<Seller> GetS();

    }
}
