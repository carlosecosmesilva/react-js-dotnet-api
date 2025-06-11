import React from "react";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash } from "react-icons/fi";

export default function Books() {
	return (
		<div className="book-container">
			<header>
				<img src={logoImage} alt="Erudio" />
				<span>
					Welcome, <strong>Name User</strong>
				</span>
				<Link className="button" to="/book/new">
					Add New Book
				</Link>
				<button type="button">
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>Registered Books</h1>
			<ul>
				<li>
					<strong>Title:</strong>
					<p>Book Title</p>
					<strong>Author:</strong>
					<p>Book Author</p>
					<strong>Price:</strong>
					<p>R$ 100,00</p>
					<strong>Release Date:</strong>
					<p>11/06/2025</p>
					<button type="button">
						<FiEdit size={20} color="#a8a8b3" />
					</button>
					<button type="button">
						<FiTrash size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>Title:</strong>
					<p>Book Title</p>
					<strong>Author:</strong>
					<p>Book Author</p>
					<strong>Price:</strong>
					<p>R$ 100,00</p>
					<strong>Release Date:</strong>
					<p>11/06/2025</p>
					<button type="button">
						<FiEdit size={20} color="#a8a8b3" />
					</button>
					<button type="button">
						<FiTrash size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>Title:</strong>
					<p>Book Title</p>
					<strong>Author:</strong>
					<p>Book Author</p>
					<strong>Price:</strong>
					<p>R$ 100,00</p>
					<strong>Release Date:</strong>
					<p>11/06/2025</p>
					<button type="button">
						<FiEdit size={20} color="#a8a8b3" />
					</button>
					<button type="button">
						<FiTrash size={20} color="#a8a8b3" />
					</button>
				</li>
				<li>
					<strong>Title:</strong>
					<p>Book Title</p>
					<strong>Author:</strong>
					<p>Book Author</p>
					<strong>Price:</strong>
					<p>R$ 100,00</p>
					<strong>Release Date:</strong>
					<p>11/06/2025</p>
					<button type="button">
						<FiEdit size={20} color="#a8a8b3" />
					</button>
					<button type="button">
						<FiTrash size={20} color="#a8a8b3" />
					</button>
				</li>
			</ul>
		</div>
	);
}
