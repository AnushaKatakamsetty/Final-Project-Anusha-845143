using Emart.SellerServices.Models;
using Emart.SellerServices.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    class TestItemRepository
    {

        SSItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SSItemRepository(new EmartDBContext());
        }
        [Test]
        [Description("to test add items")]

        public void TestAddItem()
        {
            _repo.AddItem(new Items()
            {
                Id = 876,
                CategoryId = 1,
                SubcategoryId = 1,
                ItemName = "flower",
                Price = 20,
                Itemdescription = "flower Keychain",
                StockNumber = 30,
                Remarks = "super",
                SellerId = 1,
                Image = "dw1.jpg"

            });
        }
        [Test]
        [Description("to test delete  Items")]

        public void TestDeleteItem()
        {
            _repo.DeleteItem(876);
            var result = _repo.GetItems(876);
            Assert.Null(result);
        }
        [Test]
        [Description("to test Get Item by id")]

        public void TestViewItems()
        {
            var result = _repo.ViewItems(1);
            Assert.IsNotNull(result);
        }
       
        [Test]
        [Description("to test to get subcategory based on category id")]
        public void TestSubcategory()
        {
            var result = _repo.GetSub(2);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test get by id")]
        public void TestGetItem()
        {
            var result = _repo.GetItems(4);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("to test Get categories")]

        public void TestGetAllcategories()
        {
            var result = _repo.GetAllCategories();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }

    }
}
