import '../styles/card.css';
import React, { useState } from 'react';
const Card = (props) => {
	const [fliped, setFliped] = useState(false);

	const handleClick = (e) => {
		if (props.handleClick(props.id)) {
			setFliped((prevState) => !prevState);
		}
	};

	return (
		<div
			className={`flip-card-container ${fliped ? 'flip' : null}`}
			onClick={handleClick}>
			<div className='flip-card'>
				<div className='flip-card-front'>Front</div>
				<div className='flip-card-back'>
					<img className='photo' src={props.url} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Card;
