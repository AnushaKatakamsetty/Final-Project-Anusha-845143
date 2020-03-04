using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountServices.Repositories
{
    public class Token
    {
        public  string token { get; set; }
       public string message { get; set; }

        public int SellerId { get; set; }
        public int Buyerid { get; set; }
    }
}
