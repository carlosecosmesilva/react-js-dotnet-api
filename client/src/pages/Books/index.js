import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash } from "react-icons/fi";
import Api from "../../services/Api";
import "./styles.css";
import logoImage from "../../assets/logo.svg";

export default function Books() {
	const [books, setBooks] = useState([]);
	const [page, setPage] = useState(1);
	const accessToken = localStorage.getItem("accessToken");
	const userName = localStorage.getItem("userName");
	const language = navigator.language || navigator.userLanguage;
	const authorization = React.useMemo(
		() => ({
			Authorization: `Bearer ${accessToken}`,
		}),
		[accessToken]
	);
	const navigate = useNavigate();

	useEffect(() => {
		fetchMoreBooks();
		// eslint-disable-next-line
	}, [accessToken, authorization]);

	async function fetchMoreBooks() {
		try {
			const response = await Api.get(
				`api/books/v1/asc/5/${page}`,
				authorization
			);
			setBooks([...books, ...response.data.list]);
			setPage(page + 1);
		} catch (error) {
			console.error("Error fetching more books:", error);
			alert("Error fetching more books. Please try again.");
		}
	}

	async function deleteBook(id) {
		try {
			await Api.delete(`api/books/v1/${id}`, authorization);
			setBooks(books.filter((book) => book.id !== id));
		} catch (error) {
			console.error("Error deleting book:", error);
			alert("Error deleting book. Please try again.");
		}
	}

	async function logout() {
		try {
			await Api.get("api/auth/v1/revoke", null, authorization);
			localStorage.clear();
			navigate.push("/");
		} catch (error) {
			console.error("Logout failed:", error);
			alert("Logout failed. Please try again.");
		}
	}

	async function editBook(id) {
		try {
			navigate(`/book/new/${id}`);
		} catch (error) {
			console.error("Error navigating to edit book:", error);
			alert("Error navigating to edit book. Please try again.");
		}
	}

	return (
		<div className="book-container">
			<header>
				<img src={logoImage} alt="Erudio" />
				<span>
					Welcome, <strong>{userName.toLowerCase()}</strong>
				</span>
				<Link className="button" to="/book/new/0">
					Add New Book
				</Link>
				<button onClick={logout} type="button">
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>Registered Books</h1>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<strong>Title:</strong>
						<p>{book.title}</p>
						<strong>Author:</strong>
						<p>{book.author}</p>
						<strong>Price:</strong>
						<p>
							{Intl.NumberFormat(
								language === "en-US" ? "en-US" : "pt-BR",
								{
									style: "currency",
									currency:
										language === "en-US" ? "USD" : "BRL",
								}
							).format(book.price)}
						</p>
						<strong>Release Date:</strong>
						<p>{new Date(book.releaseDate).toLocaleDateString()}</p>

						<button onClick={() => editBook(book.id)} type="button">
							<FiEdit size={20} color="#a8a8b3" />
						</button>
						<button
							onClick={() => deleteBook(book.id)}
							type="button"
						>
							<FiTrash size={20} color="#A8A8B3" />
						</button>
					</li>
				))}
			</ul>
			<button className="button" onClick={fetchMoreBooks} type="button">
				Load More
			</button>
		</div>
	);
}
