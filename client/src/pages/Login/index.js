import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import "./styles.css";
import logoImage from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";

export default function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function login(e) {
		e.preventDefault();
		const data = {
			userName,
			password,
		};
		try {
			const response = await Api.post("api/auth/v1/signin", data);
			localStorage.setItem("userName", response.data.userName);
			localStorage.setItem("accessToken", response.data.accessToken);
			localStorage.setItem("refreshToken", response.data.refreshToken);

			navigate("/books");
		} catch (error) {
			console.error("Login failed:", error);
			alert("Login failed. Please try again.");
			return;
		}
	}

	return (
		<div className="login-container">
			<section className="login-form">
				<img src={logoImage} alt="Logo" className="logo" />
				<form onSubmit={login}>
					<h1>Access your Account</h1>
					<input
						placeholder="Login"
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<input
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="button" type="submit">
						Login
					</button>
				</form>
			</section>
			<img src={padlock} alt="Padlock" className="padlock" />
		</div>
	);
}
