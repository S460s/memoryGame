import '../styles/card.css';
const Card = (props) => {
	const handleClick = (e) => {
		let container = e.target.parentElement.parentElement;
		props.handleClick({
			element: container,
			url: props.url,
		});
	};
	return (
		<div className={`flip-card-container`} onClick={handleClick}>
			<div className='flip-card'>
				<div className='flip-card-front'>Front</div>
				<div className='flip-card-back'>
					<img className='photo' src={props.url} alt='A little dog' />
				</div>
			</div>
		</div>
	);
};

export default Card;
