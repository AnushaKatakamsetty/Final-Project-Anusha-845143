using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AccountServices.Repositories;
using Emart.AccountServices.Models;
using Microsoft.AspNetCore.Cors;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace Emart.AccountServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
       /// [EnableCors(origins: "http://example.com", headers: "content-type", methods: "")]
        
        private readonly IAccountRepository _repo;
        private readonly   IConfiguration configuration;

        public AccountController(IAccountRepository repo,IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;
        }
        [HttpGet]
        [Route("LoginBuyer/{username}/{password}")]
        public IActionResult LoginBuyer(string username, string password)
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.LoginBuyer(username, password);
                if (buyer != null)
                {
                    token = new Token() { Buyerid= buyer.BuyerId,token = GenerateJwtToken(username), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("LoginSeller/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.LoginSeller(uname, pwd);
                if (seller!= null)
                {
                    token = new Token() { SellerId= seller.SellerId, token = GenerateJwtToken(uname), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
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
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );


            return new JwtSecurityTokenHandler().WriteToken(token);



          }
    }
}

