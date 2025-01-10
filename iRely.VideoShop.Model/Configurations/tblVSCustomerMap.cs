using iRely.VideoShop.Model.Metadata;
using System.Data.Entity.ModelConfiguration;

namespace iRely.VideoShop.Model.Configurations
{
    public class tblVSCustomerMap : EntityTypeConfiguration<tblVSCustomer>
    {
        public tblVSCustomerMap()
        {
            this.HasKey(t => t.intCustomerId);
            this.ToTable("tblVSCustomer"); 
        }   
    } 
}
