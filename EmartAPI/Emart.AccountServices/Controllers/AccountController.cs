using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountServices.Repositories;
using Emart.AccountServices.Models;

namespace Emart.AccountServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("LoginBuyer/{username}/{password}")]
        public IActionResult LoginBuyer(string username, string password)
        {
            try
            {
                
                return Ok(_repo.LoginBuyer(username, password));
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("LoginSeller/{username}/{password}")]
        public IActionResult LoginSeller(string username, string password)
        {
            try
            {
               
                return Ok(_repo.LoginSeller(username, password));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("Get")]
        public IActionResult Get()
        {
            return Ok(_repo.Get());
        }
        [HttpGet]
        [Route("GetS")]
        public IActionResult GetS()
        {
            return Ok(_repo.GetS());
        }
        [HttpPost]
        [Route("RegisterBuyer")]
        public IActionResult RegisterBuyer(Buyer b)
        {
            try
            {
                _repo.RegisterBuyer(b);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        [Route("RegisterSeller")]
        public IActionResult RegisterSeller(Seller s)
        {
            try
            {
                _repo.RegisterSeller(s);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
    }
}
