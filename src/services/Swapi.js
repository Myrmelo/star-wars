import axios from 'axios';

const BASE_URL = 'https://swapi.py4e.com/api';

export const fetchCharacters = async () => {
	const { data } = await axios.get(`${BASE_URL}/people/`);
	return data.results;
};

export const fetchCharacterDetails = async (id) => {
	const { data } = await axios.get(`${BASE_URL}/people/${id}/`);
	return data;
};
