using BooksApp.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Api.Controllers;

[Route("api/authors")]
[ApiController]
public class AuthorsController : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Author>> Get()
    {
        return new List<Author> { new Author { Id = 1, Name = "Jozuan" }, new Author { Id = 2, Name = "Dilan" } };
    }
}
