import '../styles/header.css';

const Header = (props) => {
	return (
		<header>
			<h1 className='title'>Memory Game</h1>
			<div className='scoreboard'>
				<p>Moves: {props.moves}</p>
				<p>High Score: {props.bestScore}</p>
			</div>
		</header>
	);
};

export default Header;
