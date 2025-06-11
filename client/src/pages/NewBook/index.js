import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logoImage from "../../assets/logo.svg";
import "./styles.css";

export default function NewBook() {
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
				<form>
					<input type="text" placeholder="Title" />
					<input type="text" placeholder="Author" />
					<input type="number" placeholder="Price" />
					<input type="date" placeholder="Release Date" />
					<button className="button" type="submit">
						Add Book
					</button>
				</form>
			</div>
		</div>
	);
}
