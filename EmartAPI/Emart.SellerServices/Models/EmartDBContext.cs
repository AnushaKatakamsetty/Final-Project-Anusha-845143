using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.SellerServices.Models
{
    public partial class EmartDBContext : DbContext
    {
        public EmartDBContext()
        {
        }

        public EmartDBContext(DbContextOptions<EmartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discount> Discount { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-QPCEPU4\\SQLEXPRESS;Initial Catalog=EmartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasIndex(e => e.BuyerEmailid)
                    .HasName("UQ__Buyer__0FF09F036E8F4DDA")
                    .IsUnique();

                entity.Property(e => e.BuyerId)
                    .HasColumnName("buyer_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BuyerEmailid)
                    .IsRequired()
                    .HasColumnName("buyer_emailid")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerMobilenumber).HasColumnName("buyer_mobilenumber");

                entity.Property(e => e.BuyerPassword)
                    .IsRequired()
                    .HasColumnName("buyer_password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.BuyerUsername)
                    .IsRequired()
                    .HasColumnName("buyer_username")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Createdatetime)
                    .HasColumnName("createdatetime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasIndex(e => e.CategoryName)
                    .HasName("UQ__Category__5189E25592E7825B")
                    .IsUnique();

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("brief_details")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnName("category_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discount>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .HasColumnName("discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("date");

                entity.Property(e => e.Percentage)
                    .HasColumnName("percentage")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.StartDate)
                    .HasColumnName("start_date")
                    .HasColumnType("date");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasIndex(e => e.ItemName)
                    .HasName("UQ__Items__ACA52A972DBEA2B1")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("item_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Itemdescription)
                    .IsRequired()
                    .HasColumnName("itemdescription")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasColumnName("remarks")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.StockNumber).HasColumnName("stock_number");

                entity.Property(e => e.SubcategoryId).HasColumnName("subcategory_id");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Items__category___1DE57479");

                entity.HasOne(d => d.Subcategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubcategoryId)
                    .HasConstraintName("FK__Items__subcatego__1ED998B2");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasIndex(e => e.SellerEmailid)
                    .HasName("UQ__Seller__D87C8C666330F6BA")
                    .IsUnique();

                entity.Property(e => e.SellerId)
                    .HasColumnName("seller_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefAboutCompany)
                    .IsRequired()
                    .HasColumnName("brief_about_company")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasColumnName("company_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin).HasColumnName("GSTIN");

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postal_address")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SellerContactnumber).HasColumnName("seller_contactnumber");

                entity.Property(e => e.SellerEmailid)
                    .IsRequired()
                    .HasColumnName("seller_emailid")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SellerPassword)
                    .IsRequired()
                    .HasColumnName("seller_password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SellerUsername)
                    .IsRequired()
                    .HasColumnName("seller_username")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasColumnName("website")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasIndex(e => e.SubcategoryName)
                    .HasName("UQ__SubCateg__5B73707312BE317F")
                    .IsUnique();

                entity.Property(e => e.SubcategoryId)
                    .HasColumnName("subcategory_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .IsRequired()
                    .HasColumnName("brief_details")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Gstpercentage)
                    .HasColumnName("GSTpercentage")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.SubcategoryName)
                    .IsRequired()
                    .HasColumnName("subcategory_name")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__SubCatego__categ__1A14E395");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
