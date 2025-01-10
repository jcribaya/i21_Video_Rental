using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iRely.VideoShop.Model.Metadata
{
    public class tblVSMovie : iRely.Common.BaseEntity
    {
        public int intMovieId { get; set; }
        public string strMovieName { get; set; }
        public int intMovieYear { get; set; }
        public string strDirector { get; set; }
        public string strGenre { get; set; }
        public string strDescription { get; set; }
        public decimal dblMovieRentalFee { get; set;  }
        public List<tblVSRentalHeaderDetail> tblVSRentalHeaderDetail { get; set; }
    }
}
