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
        public ActionResult<IEnumerable<Corpus>> Get(int corpusId, string summary)
        {
        }
    }
}