import { useCharacters } from '../hooks/useCharacters';
import './Characters.css';

const extractIdFromUrl = (url) => {
	const idPattern = /\/people\/(\d+)\//;
	const match = url.match(idPattern);
	return match ? match[1] : null;
};

const Characters = () => {
	const { data, isLoading, error } = useCharacters();

	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div className='characters-container'>
			{data.map((character) => (
				<div className='character' key={character.url}>
					<h2>{character.name}</h2>
					<p>ID: {extractIdFromUrl(character.url)}</p>
				</div>
			))}
		</div>
	);
};

export default Characters;
