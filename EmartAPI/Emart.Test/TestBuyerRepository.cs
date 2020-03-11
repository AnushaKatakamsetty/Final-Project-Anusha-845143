using Emart.BuyerServices.Repositories;
using Emart.BuyerServices.Models;
using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;

namespace Emart.Test
{
    class TestBuyerRepository
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        public void TestSearchItem()
        {
            var result = _repo.SearchItems("cruiser");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestViewAll()
        {
            var result = _repo.ViewAll();
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile(1);
            Assert.IsNotNull(result);
        }
    
       
    }
}
