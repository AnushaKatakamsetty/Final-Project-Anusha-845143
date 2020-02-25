using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminServices.Models;


namespace Emart.AdminServices.Repositories
{
    public interface IAdminRepository
    {
        void AddCategory(Category category);
        void AddSubCategory(SubCategory subcategory);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string scid);
        List<Category> ViewCategory();
    }
}
