using iRely.VideoShop.Model.Metadata;
using System.Data.Entity.ModelConfiguration;

namespace iRely.VideoShop.Model.Configurations
{
    public class tblVSRentalHeaderMap : EntityTypeConfiguration<tblVSRentalHeader>
    {
        public tblVSRentalHeaderMap()
        {
            this.HasKey(t => t.intRentalHeaderId);
            this.ToTable("tblVSRentalHeader");
            
            this.HasRequired(r => r.tblVSCustomer)
                .WithMany(c => c.tblVSRentalHeaders)
                .HasForeignKey(r => r.intCustomerId);

            this.Ignore(d => d.strFullName);

        }
    }
}
