﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerServices.Repositories;
using Emart.SellerServices.Models;
namespace Emart.SellerServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SSItemsController : ControllerBase
    {
        private readonly SSIItemRepository _rep;
        public SSItemsController(SSIItemRepository rep)
        {
            _rep = rep;
        }
        [HttpPost]
        [Route("AddItem")]
        public IActionResult AddItem(Items it)
        {
            try
            {
                _rep.AddItem(it);
                return Ok();
                
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
  
        }
        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public IActionResult DeleteItem(int id)
        {
            try
            { 
                _rep.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItems/{itemid}")]
        public IActionResult GetItems(int itemid)
        {
            try
            {   
                return Ok(_rep.GetItems(itemid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult UpdateItem(Items obj)
        {
            try
            {
                _rep.UpdateItem(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("ViewItems/{sellerid}")]
        public IActionResult ViewItems(int sellerid)
        {
            try
            {
               
                return Ok(_rep.ViewItems(sellerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSub/{cid}")]
        public IActionResult GetSub(int cid)
        {
            try
            {

                return Ok(_rep.GetSub(cid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCategories")]
        public IActionResult GetAllCategories(int sellerid)
        {
            try
            {

                return Ok(_rep.GetAllCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

    }
}