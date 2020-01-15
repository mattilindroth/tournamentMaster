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
    [Route("api/[controller]")]
    public class TournamentController : ControllerBase
    {

        private Tournament[] _tournaments;

        public TournamentController() {
            _tournaments = new Tournament[5];
            _tournaments[0] = new Tournament {Id = 0, Name = "Kinkkuturnaus", Location="Nummela", Start=new DateTime(2019,12,21)};
            _tournaments[1] = new Tournament {Id = 1, Name = "KaSu kevät turnaus", Location="Karkkila",Start=new DateTime(2020,03,28)};
            _tournaments[2] = new Tournament {Id = 2, Name = "SjuBa turnaus Kevät 2020", Location="Siuntio",Start=new DateTime(2020,02,20)};
            _tournaments[3] = new Tournament {Id = 3, Name = "Kunnon nelinpeliä - Forever", Location="Espoo",Start=new DateTime(2020,01,25)};
            _tournaments[4] = new Tournament {Id = 4, Name = "Somero turnaus", Location="Somero",Start=new DateTime(2019,05,13)};
        }
        [HttpGet("{id}")]
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
