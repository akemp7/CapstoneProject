using System.ComponentModel.DataAnnotations;
namespace Corpus.Models
{
    public class Corpus
    {
        public int CorpusId { get; set; }
        public string Summary {get; set; }
    }
}