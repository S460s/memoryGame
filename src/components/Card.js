import '../styles/card.css';
const Card = (props) => {
	const handleClick = (e) => {
		let container = e.target.parentElement.parentElement;
		if (
			props.handleClick({
				id: props.id,
				element: container,
				url: props.url,
			})
		) {
			container.classList.add('flip');
		} else {
			console.log('Already selected');
		}
	};
	return (
		<div className={`flip-card-container`} onClick={handleClick}>
			<div className='flip-card'>
				<div className='flip-card-front'>Front</div>
				<div className='flip-card-back'>
					<p>{props.url}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
