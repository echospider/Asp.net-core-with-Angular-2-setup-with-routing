using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Security.Claims;
using Echospider.Models;
using Microsoft.AspNetCore.Authorization;

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
                //var token = TokenProviderMiddleware.GetIdentity("test", "test");
                return Ok(new { success = true });
            }
            else
            {
                
                return Ok(new { success = false, message = "Username or password is incorrect" });
            }
        }

        [HttpGet("GetUsers"), Produces("application/json"), Authorize]
        public JsonResult Users()
        {
            List<User> _users = new List<User>
            {
                new User() { FirstName = "Anup", LastName = "Pal" },
                new User() { FirstName = "Anuj", LastName = "Pal" },
                new User() { FirstName = "Ram", LastName = "Pal" },
                new User() { FirstName = "Sam", LastName = "Pal" },
                new User() { FirstName = "Jadu", LastName = "Pal" },
                new User() { FirstName = "Madhu", LastName = "Pal" },
                new User() { FirstName = "Joy", LastName = "Pal" },
                new User() { FirstName = "Raj", LastName = "Pal" },
                new User() { FirstName = "Pradip", LastName = "Pal" },
                new User() { FirstName = "Niladri", LastName = "Pal" },
                new User() { FirstName = "Prajat", LastName = "Pal" },
                new User() { FirstName = "Shyam", LastName = "Pal" }
            };
            return new JsonResult(_users);
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
