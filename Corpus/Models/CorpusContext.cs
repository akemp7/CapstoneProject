using Microsoft.EntityFrameworkCore;

namespace Corpus.Models
{
    public class CorpusContext : DbContext
    {
        public CorpusContext(DbContextOptions<CorpusContext> options)
        : base(options)
        {

        }

        public DbSet<Summary> Corpus { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Summary>()
                .HasData(

                   new Summary {SummaryId = 1, UserSumm = "This will be the summary of the video they see. It will be a somewhat lengthy summary, but hopefully not too verbose."},

                    new Summary { SummaryId = 2, UserSumm = "This is another summary for testing purposes..." }
            );
        }
    }
}