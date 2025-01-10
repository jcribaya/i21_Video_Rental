using iRely.Common;
using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;

namespace iRely.VideoShop.BusinessLayer.Implementation
{
    public class MovieBl : BusinessLayer<tblVSMovie>, IMovieBI
    {
        public MovieBl(IVideoShopRepository db) : base(db)
        {
        }
    }
}
