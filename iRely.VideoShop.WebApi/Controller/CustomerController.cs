using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using iRely.Common;
using System.Web.Http;

namespace iRely.VideoShop.WebApi.Controller
{
    public class CustomerController : BaseApiController<tblVSCustomer>
    {
        private ICustomerBl _bl;
        
        public CustomerController(ICustomerBl bl) : base(bl)
        {
            _bl = bl;
        } 
    }
}
