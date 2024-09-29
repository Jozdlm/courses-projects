using System.ComponentModel.DataAnnotations;
using BooksApp.Api.Validators;

namespace BooksApp.Api.Models;

public class Author
{
    public int Id { get; set; }
    [Required]
    [MinLength(5)]
    [NotTrailingWhitespace]
    public required string Name { get; set; }
    public virtual ICollection<Book> Books { get; set; } = new List<Book>();
}
