const WinMsg = (props) => {
	return (
		<div>
			<p className='winMsg'>Congrats! You won in {props.moves} moves!</p>
			<button
				className='playAgainBtn'
				onClick={() => {
					props.setFlag((prevState) => !prevState);
				}}>
				Play Again
			</button>
		</div>
	);
};

export default WinMsg;
