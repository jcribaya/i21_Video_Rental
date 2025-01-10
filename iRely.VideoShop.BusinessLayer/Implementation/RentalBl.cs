using iRely.Common;
using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using System.Threading.Tasks;
using System.Linq;
using System.Data.Entity;

namespace iRely.VideoShop.BusinessLayer.Implementation
{
    public class RentalBl : BusinessLayer<tblVSRentalHeader>, IRentalBI
    {
        public RentalBl(IVideoShopRepository db) : base(db)
        {

        }

        public override async Task<GetObjectResult> GetAsync(GetParameter param)
        {
            var query = _db.GetQuery<tblVSRentalHeader>()
                    .Filter(param);
            var data = await query.Execute(param, "intCustomerId", "ASC")
                .Select(s => new
                {
                    s.intRentalHeaderId,
                    s.intConcurrencyId,
                    s.intCustomerId,
                    s.dtmRentedDate,
                    s.dtmReturnDate,
                    s.tblVSCustomer.strFirstName
                }).Concat()
                .ToListAsync();
         

            return new GetObjectResult()
            {
                data = data,
                total = await query.CountAsync(param.cancellationToken)
            };
        }
    }
}
