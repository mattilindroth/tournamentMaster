using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using Microsoft.Extensions.Logging;
using tournamentMaster.Models;

namespace tournamentMaster.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Authorize]
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
        [Authorize]
        public IActionResult Post(User user) {
            
            return Ok(user);
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Authenticate([FromBody] Models.AuthenticationModel authentication) {
            
            User user = new User {
                Id = 1,
                EmailAddress = "matti.lindroth@gmail.com",
                FirstName = "Matti",
                LastName = "Lindroth",
                Password = "tournament",
                Token = "",
            };

            string secret = "CE055E57-6854-440B-A80C-03AC68ED5E9A";
             // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return Ok(user);
        }
    }
}
