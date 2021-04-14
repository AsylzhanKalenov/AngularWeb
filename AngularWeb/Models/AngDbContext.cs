using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.Models
{
    public class AngDbContext : DbContext
    {
        public DbSet<Company> Company { get; set; }
        public AngDbContext(DbContextOptions<AngDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
