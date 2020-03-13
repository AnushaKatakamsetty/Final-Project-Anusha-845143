using Emart.AccountServices.Models;
using Emart.AccountServices.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    public class TestAccountRepository
    {
       
            AccountRepository _repo;
            [SetUp]
            public void SetUp()
            {
                _repo = new AccountRepository(new EmartDBContext());
            }
            [Test]
            [Description("to test add seller")]
            public void TestAddSeller()

            {
                _repo.RegisterSeller(new Seller()
                {
                    SellerId = 9062,
                    SellerUsername = "pra2",
                    SellerPassword = "chinnu2",
                   CompanyName = "infosys",
                    SellerContactnumber = "9000326398",
                    SellerEmailid = "prasu@123.com",
                    Gstin = 90,
                    BriefAboutCompany = "good",
                    Website = "www.infosys.com",
                    PostalAddress = "karamchedu"


                });
            }
            [Test]
            [Description("to test add buyer")]
            public void AddBuyer()
            {
                _repo.RegisterBuyer(new Buyer()
                {
                    BuyerId = 6774,
                    Createdatetime = System.DateTime.Now,
                    BuyerUsername = "vijaya2",
                    BuyerPassword = "sushumi",
                    BuyerEmailid = "vijaysush@gmail.com",
                    BuyerMobilenumber = "8142070133"
                });
            }
            [Test]
            [Description("to check seller login")]
            public void TestSellerLogin()
            {
                var result = _repo.LoginSeller("seller", "sell");
                Assert.IsNotNull(result);
            }
            [Test]
            [Description("to check Buyer login")]
            public void TestBuyerLogin()
            {
                var result = _repo.LoginBuyer("anusha", "anusha");
                Assert.IsNotNull(result);
            }


        }
}
