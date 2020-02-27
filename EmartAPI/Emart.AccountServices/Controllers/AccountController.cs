using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountServices.Repositories;
using Emart.AccountServices.Models;
using Microsoft.AspNetCore.Cors;

namespace Emart.AccountServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
       /// [EnableCors(origins: "http://example.com", headers: "content-type", methods: "")]
        
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
            try { return Ok(_repo.Get()); }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetS")]
        public IActionResult GetS()
        {
            try
            {
                return Ok(_repo.GetS());
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
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
                return NotFound(ex.InnerException.Message);
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
