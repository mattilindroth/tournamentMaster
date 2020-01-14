using System.ComponentModel.DataAnnotations;

namespace tournamentMaster.Models 
{
 public class AuthenticationModel {
     [Required]
     public string userName {get;set;}
     [Required]
     public string password {get;set;}

 }   
}