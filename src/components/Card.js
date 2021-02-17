import '../styles/card.css';
import React, { useState } from 'react';
const Card = (props) => {
	const [fliped, setFliped] = useState(false);

	const handleClick = (e) => {
		setFliped((prevState) => !prevState);
	};

	return (
		<div
			className={`flip-card-container ${fliped ? 'flip' : null}`}
			onClick={handleClick}>
			<div className='flip-card'>
				<div className='flip-card-front'>Front</div>
				<div className='flip-card-back'>Back</div>
			</div>
		</div>
	);
};

export default Card;
