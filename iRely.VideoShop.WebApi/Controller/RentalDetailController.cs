using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using iRely.Common;
using System.Web.Http;

namespace iRely.VideoShop.WebApi.Controller
{

    public class RentalDetailController : BaseApiController<tblVSRentalHeaderDetail>
    {

        private IRentalDetailBI _bl;

        public RentalDetailController(IRentalDetailBI bl) : base(bl)
        {
            _bl = bl;
        }
    } 
}
