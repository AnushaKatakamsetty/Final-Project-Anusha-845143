using Emart.SellerServices.Repositories;
using Emart.SellerServices.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    class TestSellerRepository
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile(1);
            seller.CompanyName = "Amazon";
            seller.SellerContactnumber = "5817198";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile(1);
            Assert.AreSame(seller, seller1);
        }

    }
}
