using System;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;

namespace iRely.VideoShop.Model.Metadata
{
    public class tblVSRentalHeaderDetail: iRely.Common.BaseEntity
    {
        public int intRentalHeaderDetailId { get; set; }
        public int intRentalHeaderId { get; set; }
        public int intMovieId { get; set; }
         
        public string strMovieName { get; set; }

        public tblVSRentalHeader tblVSRentalHeader { get; set; }
        public tblVSMovie tblVSMovie { get; set; }
    }
}
