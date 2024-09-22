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

    [HttpGet("{id:int}")]
    public async Task<ActionResult<List<Author>>> GetById(int id)
    {
        var author = await _context.Authors.Include(x => x.Books).FirstOrDefaultAsync(x => x.Id == id);

        if (author == null)
        {
            return NotFound();
        }

        return Ok(author);
    }

    [HttpPost]
    public async Task<ActionResult> Post(Author author)
    {
        _context.Add(author);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = author.Id }, author);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(int id, Author authorDto)
    {
        if (authorDto.Id != id)
        {
            return BadRequest(new { Message = "Must be equal the authorId with the Id provided" });
        }

        var author = await _context.Authors.FindAsync(id);

        if (author == null)
        {
            return NotFound();
        }

        _context.Update(authorDto);
        await _context.SaveChangesAsync();
        return Ok(new { Success = true });
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        var author = await _context.Authors.FindAsync(id);

        if (author == null)
        {
            return NotFound();
        }

        _context.Remove(author);
        await _context.SaveChangesAsync();
        return Ok(new { Success = true });
    }
}
