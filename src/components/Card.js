import '../styles/card.css';
import React, { useState } from 'react';
const Card = (props) => {
	const handleClick = (e) => {
		if (
			props.handleClick({
				id: props.id,
				element: e.target.parentElement.parentElement,
				url: props.url,
			})
		) {
			e.target.parentElement.parentElement.classList.add('flip');
		}
	};

	return (
		<div className={`flip-card-container`} onClick={handleClick}>
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
