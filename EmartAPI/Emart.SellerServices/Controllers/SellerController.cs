using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerServices.Models;
using Emart.SellerServices.Repositories;

namespace Emart.SellerServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Seller sell)
        {
            try
            {
                _repo.EditProfile(sell);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{sellerid}")]
        public IActionResult GetProfile(int sellerid)
        {
            try
            {
                return Ok(_repo.GetProfile(sellerid));
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}