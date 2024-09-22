using System;
using BooksApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksApp.Api.Data;

public class BooksDbContext : DbContext
{
    public DbSet<Author> Authors { get; set; }

    public BooksDbContext(DbContextOptions options) : base(options)
    {

    }
}
