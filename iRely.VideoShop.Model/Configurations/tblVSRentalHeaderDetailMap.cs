using iRely.VideoShop.Model.Metadata;
using System.Data.Entity.ModelConfiguration;

namespace iRely.VideoShop.Model.Configurations
{
    public class tblVSRentalHeaderDetailMap : EntityTypeConfiguration<tblVSRentalHeaderDetail>
    {
        public tblVSRentalHeaderDetailMap()
        {
            this.HasKey(t => t.intRentalHeaderDetailId);
            this.ToTable("tblVSRentalHeaderDetail");

            this.HasRequired(d => d.tblVSRentalHeader)
                .WithMany(h => h.tblVSRentalHeaderDetails)
                .HasForeignKey(d => d.intRentalHeaderId);

            this.HasRequired(d => d.tblVSMovie)
                .WithMany(h => h.tblVSRentalHeaderDetail)
                .HasForeignKey(d => d.intMovieId);

            this.Ignore(d => d.strMovieName);
        }
    }
}
