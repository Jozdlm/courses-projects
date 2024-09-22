namespace BooksApp.Api.Models;

public class Book
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public int AuthorId { get; set; }
    public virtual Author? Author { get; set; }
}