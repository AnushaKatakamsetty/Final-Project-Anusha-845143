using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminServices.Models;


namespace Emart.AdminServices.Repositories
{
    public class AdminRepository:IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subcategory)
        {
            _context.Add(subcategory);
            _context.SaveChanges();

        }

        public void DeleteCategory(string cid)
        {
            Category category = _context.Category.Find(cid);
            _context.Category.Remove(category);
            _context.SaveChanges();

        }

        public void DeleteSubCategory(string scid)
        {

            SubCategory subcategory = _context.SubCategory.Find(scid);
            _context.SubCategory.Remove(subcategory);
            _context.SaveChanges();
        }

        public List<Category> ViewCategory()
        {
            return _context.Category.ToList();
        }
    }
}

