﻿using Emart.BuyerServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerServices.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void EditProfile(Buyer b)
        {
            _context.Buyer.Update(b);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Buyer GetProfile(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<SubCategory> GetSubCategories(int categoryid)
        {
            return _context.SubCategory.Where(i => i.CategoryId == categoryid).ToList();
        }

        public List<Items> SearchItems(string name, decimal price)
        {
            return _context.Items.Where(i => i.ItemName == name && i.Price == price).ToList();
        }
    }
}