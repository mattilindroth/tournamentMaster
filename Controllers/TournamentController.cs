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
    public class TournamentController : ControllerBase
    {

        private Tournament[] _tournaments;

        public TournamentController() {
            _tournaments = new Tournament[5];
            _tournaments[0] = new Tournament {Id = 0, Name = "Kinkkuturnaus"};
            _tournaments[1] = new Tournament {Id = 1, Name = "KaSu kevät turnaus"};
            _tournaments[2] = new Tournament {Id = 2, Name = "SjuBa turnaus Kevät 2020"};
            _tournaments[3] = new Tournament {Id = 3, Name = "Kunnon nelinpeliä - Forever"};
            _tournaments[4] = new Tournament {Id = 4, Name = "Somero turnaus"};
        }
        [HttpGet]
        public IActionResult Get(int id)
        {
            if(id < 0 ||id > _tournaments.Length)
                return NotFound();
            return Ok(_tournaments[id]);
        }

        [HttpGet] 
        public IActionResult Get() {
            return Ok(_tournaments);
        }
    }
}
