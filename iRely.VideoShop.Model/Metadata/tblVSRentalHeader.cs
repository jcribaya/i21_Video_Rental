using System;
using System.Collections.Generic;

namespace iRely.VideoShop.Model.Metadata
{
    public class tblVSRentalHeader : iRely.Common.BaseEntity
    { 
        public int intRentalHeaderId { get; set; }
        public int intCustomerId { get; set; }
        public DateTime? dtmRentedDate { get; set; }
        public DateTime? dtmReturnDate { get; set; }
        
        public string strFullName { get; set; }
        
        public List<tblVSRentalHeaderDetail> tblVSRentalHeaderDetails { get; set; }
        public tblVSCustomer tblVSCustomer { get; set; }
    }
}
