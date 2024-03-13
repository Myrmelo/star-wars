import './Card.css';

const Card = ({ character }) => {
	return (
		<div className='card'>
			<h2>{character.name}</h2>
			<p>Eye color : {character.eye_color}</p>
			<p>Hair color : {character.hair_color}</p>
			<p>Gender : {character.gender}</p>
			<p>Height : {character.height}</p>
			<p>Mass : {character.mass}</p>
		</div>
	);
};

export default Card;
