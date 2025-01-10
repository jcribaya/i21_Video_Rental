using iRely.VideoShop.Model.Metadata;
using System.Data.Entity.ModelConfiguration;

namespace iRely.VideoShop.Model.Configurations
{
    public class tblVSMovieMap : EntityTypeConfiguration<tblVSMovie>
    {
        public tblVSMovieMap()
        {
            this.HasKey(t => t.intMovieId);
            this.ToTable("tblVSMovie");
        }
    }
}
