using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using iRely.Common;

namespace iRely.VideoShop.WebApi.Controller
{
    public class RentalController : BaseApiController<tblVSRentalHeader>
    {
        private IRentalBI _bl;


        public RentalController(IRentalBI bl) : base(bl)
        {
            _bl = bl;
        }
    }
}
