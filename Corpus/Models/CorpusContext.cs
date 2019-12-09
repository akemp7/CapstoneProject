using Microsoft.EntityFrameworkCore;

namespace Corpus.Models
{
    public class CorpusContext : DbContext
    {
        public CorpusContext(DbContextOptions<CorpusContext> options)
        : base(options)
        {

        }

        public DbSet<Entry> Corpus { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Entry>()
                .HasData(

                   new Entry {CorpusId = 1, Summary = "This will be the summary of the video they see. It will be a somewhat lengthy summary, but hopefully not too verbose."},

                    new Entry { CorpusId = 2, Summary = "This is another summary for testing purposes..." }
            );
        }
    }
}