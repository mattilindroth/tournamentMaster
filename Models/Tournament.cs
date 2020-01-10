using System;

namespace tournamentMaster.Models {
    public class Tournament {
        public int Id {get; set;}
        public string Name {get;set;}
        public DateTime Start {get;set;}
        public DateTime End {get;set;}
        public string Location {get;set;}
    }
}