using Xunit;
using Moq;
using System.Collections.Generic;
using RestWithASPNETErudio.Model;
using RestWithASPNETErudio.Repository;
using RestWithASPNETErudio.Business.Implementations;

namespace RestWithASPNETErudio.Tests.Business
{
    public class BookBusinessImplementationTest
    {
        [Fact]
        public void FindAll_ReturnsListOfBooks()
        {
            // Arrange
            var mockRepo = new Mock<IRepository<Book>>();
            mockRepo.Setup(repo => repo.FindAll()).Returns(new List<Book> { new Book { Id = 1, Title = "Test Book" } });

            var business = new BookBusinessImplementation(mockRepo.Object);

            // Act
            var result = business.FindAll();

            // Assert
            Assert.NotNull(result);
            Assert.Single(result);
            Assert.Equal("Test Book", result[0].Title);
        }
    }
}