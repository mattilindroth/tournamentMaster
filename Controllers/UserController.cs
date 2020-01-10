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
        public IActionResult<User> Get(int id)
        {
            
        }

        [HttpPost] 
        public IActionResult<User> Post(User user) {

        }
    }
}
