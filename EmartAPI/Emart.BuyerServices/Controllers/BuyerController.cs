using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerServices.Models;
using Emart.BuyerServices.Repositories;

namespace Emart.BuyerServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("ViewProductDetails/{item_name}")]
        public IActionResult ViewProductDetails(string item_name)
        {
            try
            {
                return Ok(_repo.ViewProductDetails(item_name));
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewAll")]
        public IActionResult ViewAll()
        {
            try
            {
                
                return Ok(_repo.ViewAll());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewCart")]
        public IActionResult ViewCart()
        {
            try
            {

                return Ok(_repo.ViewCart());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItems/{name}")]
        public IActionResult SearchItems(string name)
        {
            try
            {
                return Ok(_repo.SearchItems(name));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        //void BuyItems(Transaction t);
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();

            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{bid}")]
        public IActionResult GetProfile(int bid)
        {
            try
            {
                return Ok(_repo.GetProfile(bid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        // List<Transaction> TransactionHistrory(int bid); 
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());

            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories/{categoryid}")]
        public IActionResult GetSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyProduct")]
        public IActionResult BuyItem(PurchaseHistory obj)
        {
            try
            {
                _repo.BuyItem(obj);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(Cart obj)
        {
            try
            {
                _repo.AddToCart(obj);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("RemoveCartItem/{itemid}")]
        public IActionResult RemoveCartItem(int itemid)
        {
            try
            {
                _repo.RemoveCartItem(itemid);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewPurchaseHistory/{pid}")]
        public IActionResult  ViewPurchaseHistory(int pid)
        {
            try
            {
                return Ok(_repo.ViewPurchaseHistory(pid));
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}