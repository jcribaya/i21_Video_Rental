using iRely.VideoShop.Model.Configurations;
using iRely.VideoShop.Model.Metadata;
using System.Data.Entity;

namespace iRely.VideoShop.Model
{
    public class VideoShopEntities : DbContext
    {
        public VideoShopEntities() : base(iRely.Common.Security.GetCompanyName())
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new tblVSCustomerMap());
            modelBuilder.Configurations.Add(new tblVSMovieMap());
            modelBuilder.Configurations.Add(new tblVSRentalHeaderMap());
            modelBuilder.Configurations.Add(new tblVSRentalHeaderDetailMap());
        }

        //public DbSet<tblVSCustomer> Customer { get; set; }
        //public DbSet<tblVSMovie> Movie { get; set; }
        //public DbSet<tblVSRentalHeader> RentalHeader { get; set; }
        //public DbSet<tblVSRentalHeaderDetail> RentalHeaderDetail { get; set; }
    }

}
