import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Api from "../../services/Api";
import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function NewBook() {
    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const { bookId } = useParams();
    const navigate = useNavigate();

    const authorization = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    useEffect(() => {
        if (!bookId || bookId === "0") return;
        loadBook();
        // eslint-disable-next-line
    }, [bookId]);

    async function loadBook() {
        try {
            const response = await Api.get(`api/book/v1/${bookId}`, {
                headers: authorization,
            });
            const book = response.data;
            const formattedDate = new Date(book.releaseDate).toISOString().split("T")[0];
            setId(book.id);
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setReleaseDate(formattedDate);
        } catch (error) {
            console.error("Error loading book:", error);
            alert("Failed to load book details. Please try again.");
            navigate("/books");
        }
    }

    async function createNewBook(e) {
        e.preventDefault();
        const data = {
            id,
            title,
            author,
            price,
            releaseDate,
        };
        try {
            await Api.post("api/Book/v1", data, {
                headers: authorization,
            });
            alert("Book created successfully!");
            navigate("/books");
        } catch (error) {
            console.error("Error creating new book:", error);
            alert("Failed to create new book. Please try again.");
        }
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>Add New Book</h1>
                    <p>
                        Fill in the details below to add a new book to the collection.
                    </p>
                    <Link to="/books" className="back-link">
                        <FaArrowLeft size={16} color="#04d361" />
                        Home
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder="Release Date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
}
