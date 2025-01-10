using iRely.Common;
using iRely.VideoShop.Model;
using System.Data.Entity;
using iRely.VideoShop.BusinessLayer.Interfaces;
using iRely.VideoShop.Model.Metadata;

namespace iRely.VideoShop.BusinessLayer.Implementation
{
    public class VideoShopRepository : Repository, IVideoShopRepository
    {
        public VideoShopRepository() : base(new VideoShopEntities())  
        {
        } 
    }
}
