import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash } from "react-icons/fi";
import Api from "../../services/Api";
import "./styles.css";
import logoImage from "../../assets/logo.svg";

export default function Books() {
	const [books, setBooks] = useState([]);
	const accessToken = localStorage.getItem("accessToken");
	const userName = localStorage.getItem("userName");
	const navigate = useNavigate();

	useEffect(() => {
		Api.get("api/books/v1/asc/20/1", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}).then((response) => {
			setBooks(response.data.list);
		});
	}, [accessToken]);

	async function deleteBook(id) {
		try {
			await Api.delete(`api/books/v1/${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			setBooks(books.filter((book) => book.id !== id));
		} catch (error) {
			console.error("Error deleting book:", error);
			alert("Error deleting book. Please try again.");
		}
	}

	async function logout() {
		try {
			await Api.get("api/auth/v1/revoke", null, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			localStorage.clear();
			navigate.push("/");
		} catch (error) {
			console.error("Logout failed:", error);
			alert("Logout failed. Please try again.");
		}
	}

	const language = navigator.language || navigator.userLanguage;

	return (
		<div className="book-container">
			<header>
				<img src={logoImage} alt="Erudio" />
				<span>
					Welcome, <strong>{userName.toLowerCase()}</strong>
				</span>
				<Link className="button" to="/book/new">
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

						<button type="button">
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
		</div>
	);
}
