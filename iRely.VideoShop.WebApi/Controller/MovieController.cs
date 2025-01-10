using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;
using iRely.Common; 

namespace iRely.VideoShop.WebApi.Controller
{
    public class MovieController: BaseApiController<tblVSMovie>
    {
        private IMovieBI _bl;

        public MovieController(IMovieBI bl) : base(bl)
        {
            _bl = bl;
        }
    }
}
