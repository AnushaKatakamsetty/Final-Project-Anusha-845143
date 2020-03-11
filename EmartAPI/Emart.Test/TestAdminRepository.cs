using Emart.AdminServices.Models;
using Emart.AdminServices.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    public class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        /* [Test]
         public void TestAddCategory()
         {
             _repo.AddCategory(new Category()
             {
                 CategoryId = 91,
                 CategoryName = "Cosmetics",
                 BriefDetails = "All cosmetic brands available"

             }) ; 
         }
         [Test]
         public void TestAddSubCategory()
         {
             _repo.AddSubCategory(new SubCategory()
             {
                 CategoryId=90,
                 SubcategoryId=90,
               SubcategoryName="Nailcolors",
               BriefDetails="All nps available",
               Gstpercentage=18

             });

         }*/
         
    }
}
