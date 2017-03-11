using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Echospider.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Echospider.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpPost, Route("Authenticate")]
        public IActionResult Authenticate([FromBody]User user)
        {
            if(string.IsNullOrEmpty(user.UserName) || string.IsNullOrEmpty(user.Password))
            {
                
                return Ok(new { success = false, message = "Username or password should not be blank" });
            }
            else if(user.UserName.Length == 0 || user.Password.Length == 0)
            {
                return Ok(new { success = false, message = "Username or password should not be empty" });
            }
            else if(user.UserName == "test" && user.Password == "test")
            {
                Response.Headers.Add("x-token", "test-token");
                return Ok(new { success = true, token = DateTime.UtcNow.ToString("ddMMyyyyhhmmss") });
            }
            else
            {
                
                return Ok(new { success = false, message = "Username or password is incorrect" });
            }
        }

        [HttpGet("GetUsers"), Produces("application/json")]
        public JsonResult Users()
        {

            return new JsonResult(new string[] { "user", "admin" });
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
