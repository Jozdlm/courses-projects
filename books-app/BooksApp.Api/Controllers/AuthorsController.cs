using BooksApp.Api.Data;
using BooksApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksApp.Api.Controllers;

[Route("api/authors")]
[ApiController]
public class AuthorsController : ControllerBase
{
    private readonly BooksDbContext _context;

    public AuthorsController(BooksDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Author>>> Get()
    {
        return await _context.Authors.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult> Post(Author author)
    {
        _context.Add(author);
        await _context.SaveChangesAsync();
        return Ok(new { Success = true });
    }
}
