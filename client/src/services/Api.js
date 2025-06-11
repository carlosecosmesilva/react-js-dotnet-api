import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL || "http://localhost:44300/api",
});

export default api;
