using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Service.Models
{
    public class Question
    {
        public int ID { get; set; }
        public string UserID { get; set; }

        [Required]
        [MaxLength(150)]
        public string Body { get; set; }
    }
}
