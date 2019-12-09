using System;
using System.Collections.Generic;
using System.Linq;
using Corpus.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Corpus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CorpusApiController : ControllerBase
    {
        private CorpusContext _db;
        public CorpusApiController(CorpusContext db)
        {
            _db = db;
        }

        // GET api/CorpusApi
        [HttpGet]
        public ActionResult<IEnumerable<Entry>> Get(int corpusId, string summary)
        {
            var query = _db.Corpus.AsQueryable();
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
        public void Post([FromBody] Entry entry)
        {
            _db.Corpus.Add(entry);
            _db.SaveChanges();
        }

        //PUT api/CorpusApi?corpusId
        [HttpPut("{id")]
        public void Put(int id, [FromBody] Entry entry)
        {
            entry.CorpusId = id;
            _db.Entry(entry).State = EntityState.Modified;
            _db.SaveChanges();
        }

        //DELETE api/CorpusApi?corpusId
        [HttpDelete ("{id")]
        public void Delete(int id)
        {
            var entryToDelete = _db.Corpus.FirstOrDefault(entry => entry.CorpusId == id);
            _db.Corpus.Remove(entryToDelete);
            _db.SaveChanges();
        }
    }
}