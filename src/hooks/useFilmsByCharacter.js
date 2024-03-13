import { useQuery } from 'react-query';
import { fetchCharacterDetails } from '../services/Swapi';

export const useFilmsByCharacter = (characterId, fetchData) => {
	return useQuery(
		['filmsByCharacter', characterId],
		async () => {
			const characterDetails = await fetchCharacterDetails(characterId);
			const filmRequests = characterDetails.films.map((filmUrl) => fetch(filmUrl).then((response) => response.json()));
			const films = await Promise.all(filmRequests);
			return {
				characterName: characterDetails.name,
				films: films.map((film) => ({
					title: film.title,
					episode: film.episode_id,
					director: film.director,
					releaseDate: film.release_date,
				})),
			};
		},
		{
			enabled: !!fetchData && !!characterId,
		}
	);
};
