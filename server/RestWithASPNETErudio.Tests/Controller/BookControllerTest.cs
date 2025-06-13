using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using RestWithASPNETErudio.Controllers;
using RestWithASPNETErudio.Business;
using RestWithASPNETErudio.Data.VO;

namespace RestWithASPNETErudio.Tests.Controller
{
    public class BookControllerTest
    {
        [Fact]
        public void Get_ReturnsBook_WhenBookExists()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<BookController>>();
            var mockBusiness = new Mock<IBookBusiness>();
            var bookVO = new BookVO { Id = 1, Title = "Test Book" };
            mockBusiness.Setup(b => b.FindByID(1)).Returns(bookVO);

            var controller = new BookController(mockLogger.Object, mockBusiness.Object);

            // Act
            var result = controller.Get(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedBook = Assert.IsType<BookVO>(okResult.Value);
            Assert.Equal("Test Book", returnedBook.Title);
        }

        [Fact]
        public void Get_ReturnsNotFound_WhenBookDoesNotExist()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<BookController>>();
            var mockBusiness = new Mock<IBookBusiness>();
            mockBusiness.Setup(b => b.FindByID(2)).Returns((BookVO?)null);

            var controller = new BookController(mockLogger.Object, mockBusiness.Object);

            // Act
            var result = controller.Get(2);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}