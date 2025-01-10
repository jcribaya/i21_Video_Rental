using System.Threading.Tasks;
using iRely.Common;
using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using System.Linq;
using System.Data.Entity;

namespace iRely.VideoShop.BusinessLayer.Implementation
{
    public class RentalDetailBl : BusinessLayer<tblVSRentalHeaderDetail>, IRentalDetailBI
    {
        public RentalDetailBl(IVideoShopRepository db) : base(db)
        {

        }

        public override async Task<GetObjectResult> GetAsync(GetParameter param)
        {
            var query = _db.GetQuery<tblVSRentalHeaderDetail>()
                    .Filter(param);
            var data = await query.Execute(param, "intMovieId", "ASC")
                .Select(s => new
                {
                    s.intConcurrencyId,
                    s.intMovieId,
                    s.intRentalHeaderId,
                    s.intRentalHeaderDetailId,
                    s.tblVSMovie.strMovieName
                })
                .ToListAsync();

            return new GetObjectResult()
            {
                data = data,
                total = await query.CountAsync(param.cancellationToken)
            };
        }
    }
}
