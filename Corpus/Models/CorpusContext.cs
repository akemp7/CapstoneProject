using Microsoft.EntityFrameworkCore;

namespace Corpus.Models
{
    public class CorpusContext : DbContext
    {
        public CorpusContext(DbContextOptions<CorpusContext> options)
        : base(options)
        {

        }

        public DbSet<Corpus> Corpus { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Corpus>()
                .HasData(

                   new Corpus {CorpusId = 1, Summary = "This will be the summary of the video they see. It will be a somewhat lengthy summary, but hopefully not too verbose."},

                    new Corpus { CorpusId = 2, Summary = "This is another summary for testing purposes..." }
            );
        }
    }
}