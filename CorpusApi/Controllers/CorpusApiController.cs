using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CorpusApi.Models;

namespace CorpusApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorpusApiController: ControllerBase
    {
       private CorpusApiContext _db;
       public CorpusApiController(CorpusApiContext db)
       {
           _db = db;
       }

       //GET api/CorpusApi
       [HttpGet]
       public ActionResult <IEnumerable<Corpus>> Get(int corpusId, string summary)
       {
           var query = _db.CorpusApi.AsQueryable();
           if(corpusId != 0)
           {
               query = query.Where(c => c.CorpusId == corpusId);
           }
           if(summary != null) 
           {
               query = query.Where(s => s.Summary == summary);
           }

           return query.ToList();
       }

       //POST api/CorpusApi
       [HttpPost]
       public void Post([FromBody] Corpus corpus)
       {
           _db.CorpusApi.Add(corpus);
           _db.SaveChanges();
       }

       //PUT api/CorpusApi?corpusId
       [HttpPut("{id}")]
       public void Put(int id, [FromBody] Corpus corpus)
       {
           corpus.CorpusId = id;
           _db.Entry(corpus).State = EntityState.Modified;
           _db.SaveChanges();
       }

       //DELETE api/CorpusApi?corpusId
       [HttpDelete ("{id")]
       public void Delete(int id )
       {
           var ToDelete = _db.CorpusApi.FirstOrDefault(entry => entry.CorpusId == id);
           _db.CorpusApi.Remove(ToDelete);
           _db.SaveChanges();
       }

    }
}
