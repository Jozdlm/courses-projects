using BooksApp.Api.Data;
using BooksApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksApp.Api.Controllers;

[Route("api/books")]
[ApiController]
public class BooksController : ControllerBase
{
    private readonly BooksDbContext _context;

    public BooksController(BooksDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Book>>> Get()
    {
        return await _context.Books.ToListAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Book>> GetById(int id)
    {
        var book = await _context.Books.Include(x => x.Author).FirstOrDefaultAsync(x => x.Id == id);

        if (book == null)
        {
            return NotFound();
        }

        return Ok(book);
    }

    [HttpPost]
    public async Task<ActionResult<Book>> Post(Book book)
    {
        var author = await _context.Authors.FindAsync(book.AuthorId);

        if (author == null)
        {
            return BadRequest(new { Message = $"Author does not exist with Id = {book.AuthorId}" });
        }

        _context.Books.Add(book);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = book.Id }, book);
    }
}
