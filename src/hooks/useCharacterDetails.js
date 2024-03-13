import { useQuery } from 'react-query';
import { fetchCharacterDetails } from '../services/Swapi';

export const useCharacterDetails = (characterId, fetchData) => {
	return useQuery(['characterDetails', characterId], () => fetchCharacterDetails(characterId), {
		enabled: !!fetchData && !!characterId,
	});
};
