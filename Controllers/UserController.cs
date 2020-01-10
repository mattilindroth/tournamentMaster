using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using tournamentMaster.Models;

namespace tournamentMaster.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(int id)
        {
            var user = new User {
                EmailAddress="ding@dong.com",
                FirstName = "damien",
                LastName = "Ingerman",
                Password = "hashed",
            };
            return Ok(user);
        }

        [HttpPost] 
        public IActionResult Post(User user) {
            
            return Ok(user);
        }
    }
}
