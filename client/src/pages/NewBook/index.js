import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Api from "../../services/Api";
import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function NewBook() {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [price, setPrice] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const navigate = useNavigate();

	async function createNewBook(e) {
		e.preventDefault();
		const data = {
			title,
			author,
			price,
			releaseDate,
		};
		const accessToken = localStorage.getItem("accessToken");
		try {
			await Api.post("api/Book/v1", data, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
		} catch (error) {
			console.error("Error creating new book:", error);
			alert("Failed to create new book. Please try again.");
			return;
		}
		alert("Book created successfully!");
		navigate.push("/books");
	}

	return (
		<div className="new-book-container">
			<div className="content">
				<section className="form">
					<img src={logoImage} alt="Erudio" />
					<h1>Add New Book</h1>
					<p>
						Fill in the details below to add a new book to the
						collection.
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
