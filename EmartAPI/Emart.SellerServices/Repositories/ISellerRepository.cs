using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerServices.Models;


namespace Emart.SellerServices.Repositories
{
    public interface ISellerRepository
    {
        void EditProfile(Seller sell);
        Seller GetProfile(int sellerid);
    }
}
