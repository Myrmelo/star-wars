import React, { useRef, useState } from 'react';
import { useCharacterDetails } from '../hooks/useCharacterDetails';
import Card from '../components/Card';
import './Versus.css';

const Versus = () => {
	const characterId1 = useRef('');
	const characterId2 = useRef('');
	const [id1, setId1] = useState(null);
	const [id2, setId2] = useState(null);
	const [fetchData, setFetchData] = useState(false);

	const { data: characterInfo1 } = useCharacterDetails(id1, fetchData);
	const { data: characterInfo2 } = useCharacterDetails(id2, fetchData);

	const handleCompare = () => {
		setId1(characterId1.current.value);
		setId2(characterId2.current.value);
		setFetchData(true);
	};

	return (
		<div className='characters-infos-container'>
			<div className='inputs-container'>
				<input className='input' type='text' ref={characterId1} placeholder='Enter a character ID' />
				<input className='input' type='text' ref={characterId2} placeholder='Enter a character ID' />
				<button onClick={handleCompare}>Compare</button>
			</div>
			<div className='cards-container'>
				<div>{characterInfo1 && <Card character={characterInfo1} />}</div>
				<div>{characterInfo2 && <Card character={characterInfo2} />}</div>
			</div>
		</div>
	);
};

export default Versus;
