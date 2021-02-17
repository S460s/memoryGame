import '../styles/header.css';

const Header = (props) => {
	return (
		<header>
			<h1 className='title'>Memory Game</h1>
			<div className='scoreboard'>
				<p>Score: default0</p>
				<p>High Score: default0</p>
			</div>
		</header>
	);
};

export default Header;
