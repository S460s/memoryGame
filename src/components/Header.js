import '../styles/header.css';

const Header = (props) => {
	return (
		<header>
			<h1 className='title'>Memory Game</h1>
			<div className='scoreboard'>
				<p className='score'>Moves: {props.moves}</p>
				<p className='score'>High Score: {props.bestScore}</p>
			</div>
		</header>
	);
};

export default Header;
