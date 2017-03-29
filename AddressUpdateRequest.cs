using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adr.Web.Models.Requests
{
    public class AddressUpdateRequest : AddressRequiredRequest
    {
        [Required]
        public int AddressId { get; set; }
    }
}