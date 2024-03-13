import { useQuery } from 'react-query';
import { fetchCharacters } from '../services/Swapi';

export const useCharacters = () => {
	return useQuery('characters', fetchCharacters);
};
