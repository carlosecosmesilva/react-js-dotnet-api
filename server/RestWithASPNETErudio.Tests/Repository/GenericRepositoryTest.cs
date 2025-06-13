using Xunit;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using RestWithASPNETErudio.Model;
using RestWithASPNETErudio.Model.Context;
using RestWithASPNETErudio.Repository.Generic;
using System.Linq;

namespace RestWithASPNETErudio.Tests.Repository
{
    public class GenericRepositoryTest
    {
        private MySQLContext GetInMemoryContext()
        {
            var options = new DbContextOptionsBuilder<MySQLContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // banco único por teste
                .Options;
            return new MySQLContext(options);
        }

        [Fact]
        public void Create_And_FindByID_Works()
        {
            // Arrange
            using var context = GetInMemoryContext();
            var repo = new GenericRepository<Book>(context);
            var book = new Book
            {
                // Set all required properties
                Author = "Test Author",
                Title = "Test Title",
                LaunchDate = new DateTime(2021, 1, 1),
                Price = 19.99m,
                // If Id is auto-generated, you might not need to set it here
                // ... other properties
            };

            // Act
            var created = repo.Create(book);
            var found = repo.FindByID(created.Id);

            // Assert
            Assert.NotNull(found);
            Assert.Equal("Test Title", found.Title);
            Assert.False(string.IsNullOrEmpty(book.Author), "Author should not be null or empty");
        }

        [Fact]
        public void FindAll_ReturnsAllItems()
        {
            using var context = GetInMemoryContext();
            var repo = new GenericRepository<Book>(context);

            var book1 = new Book { Title = "Book 1", Author = "Author 1", LaunchDate = DateTime.Now, Price = 10.0m };
            var book2 = new Book { Title = "Book 2", Author = "Author 2", LaunchDate = DateTime.Now, Price = 12.0m };

            Assert.False(string.IsNullOrEmpty(book1.Author), "Author should not be null or empty");
            Assert.False(string.IsNullOrEmpty(book2.Author), "Author should not be null or empty");

            repo.Create(book1);
            repo.Create(book2);

            var all = repo.FindAll();

            Assert.Equal(2, all.Count);
            Assert.Contains(all, b => b.Title == "Book 1");
            Assert.Contains(all, b => b.Title == "Book 2");
        }
    }
}