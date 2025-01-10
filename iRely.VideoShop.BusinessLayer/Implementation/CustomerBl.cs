using iRely.Common;
using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iRely.VideoShop.BusinessLayer.Implementation
{
    public class CustomerBl : BusinessLayer<tblVSCustomer>, ICustomerBl
    {
        public CustomerBl(IVideoShopRepository db) : base(db)
        {
        }
    }
}
