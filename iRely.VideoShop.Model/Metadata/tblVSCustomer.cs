using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iRely.VideoShop.Model.Metadata
{
    public class tblVSCustomer : iRely.Common.BaseEntity 
    { 
        public int intCustomerId { get; set; }
        public string strLastName { get; set; }
        public string strFirstName { get; set; }
        public string strMiddleName { get; set; }      
        public string strEmail { get; set; }
        public DateTime? dtmDateOfBirth { get; set; }
        public string strStreet { get; set; }
        public string strCity { get; set; }
        public string strProvince { get; set; }
        public string strZipCode { get; set; }
        public DateTime? dtmDRegistrationDate { get; set; }
        public decimal dblMemberBalance { get; set; }
        public List<tblVSRentalHeader> tblVSRentalHeaders { get; set; }
    }

}
