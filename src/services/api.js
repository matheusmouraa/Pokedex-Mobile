import axios from "axios";

const api = axios.create({
	baseURL:
		"https://pokeapi.co/api/v2/pokemon-form?limit=151",
});

export { api };
