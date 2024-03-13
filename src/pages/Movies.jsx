import { useRef, useState } from 'react';
import { useFilmsByCharacter } from '../hooks/useFilmsByCharacter';
import './Movies.css';

const Movies = () => {
	const characterIdRef = useRef();
	const [fetchData, setFetchData] = useState(false);
	const [characterId, setCharacterId] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setCharacterId(characterIdRef.current.value);
		setFetchData(true);
	};

	const { data, isLoading, isError } = useFilmsByCharacter(characterId, fetchData);

	return (
		<div className='movies-container'>
			<form className='form' onSubmit={handleSubmit}>
				<input type='text' ref={characterIdRef} placeholder='Enter a character ID' />
				<button type='submit'>Submit</button>
			</form>
			{isLoading && fetchData && <div>Loading...</div>}
			{isError && fetchData && <div>Error fetching data</div>}
			{data && fetchData && (
				<div>
					<h2>{data.characterName}</h2>
					<h3>Films:</h3>
					<ul>
						{data.films.map((film, index) => (
							<li key={index}>
								<strong>Title:</strong> {film.title}, <strong>Episode:</strong> {film.episode},{' '}
								<strong>Director:</strong> {film.director}, <strong>Release Date:</strong> {film.releaseDate}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Movies;
