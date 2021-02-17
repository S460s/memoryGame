import Card from './components/Card';
import Header from './components/Header';
import shuffle from './helperFunctions';
import uniqid from 'uniqid';
import './styles/app.css';
import { useEffect, useRef, useState } from 'react';
function App() {
	let cards = useRef({ firstCard: null, secondCard: null, flipedPairs: 0 });

	const [moves, setMoves] = useState(0);
	const [cardComponents, setCardComponents] = useState([]);
	const [playAgain, setPlayAgain] = useState(true);
	const [bestScore, setBestScore] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	let imgUrls = useRef(['1', '2']);

	const handleClick = (card) => {
		if (card.element.classList.value === 'flip-card-container') {
			if (!cards.current.firstCard) {
				cards.current.firstCard = card;
				return true;
			} else if (!cards.current.secondCard) {
				cards.current.secondCard = card;
				if (cards.current.firstCard.url === cards.current.secondCard.url) {
					cards.current.firstCard = null;
					cards.current.secondCard = null;
					cards.current.flipedPairs += 1;
					console.log(cards.current.flipedPairs);
					console.log(imgUrls.current.length);
					if (cards.current.flipedPairs === imgUrls.current.length) {
						cards.current.flipedPairs = 0;
						console.log('GG');
						setGameOver((prevState) => !prevState);
					}
					console.log(moves);
				} else {
					setTimeout(() => {
						cards.current.firstCard.element.classList.remove('flip');
						cards.current.secondCard.element.classList.remove('flip');
						cards.current.firstCard = null;
						cards.current.secondCard = null;
					}, 1000);
				}
				setMoves((prevMoves) => prevMoves + 1);
				return true;
			}
		}
		return false;
	};

	useEffect(() => {
		setCardComponents(() => {
			let components = shuffle(imgUrls.current).map((url) => {
				let id = uniqid();
				return <Card url={url} key={id} id={id} handleClick={handleClick} />;
			});
			return components;
		});
	}, [playAgain]);

	useEffect(() => {
		if (!bestScore || bestScore > moves) {
			setBestScore(moves);
		} else {
			setBestScore(bestScore);
		}
		setMoves(0);
	}, [gameOver]);

	console.log(moves + ' moves!!!');

	return (
		<div className='App'>
			<Header moves={moves} bestScore={bestScore} />
			<div className='gameboard'>{cardComponents}</div>
			<button
				className='playAgainBtn'
				onClick={() => {
					setPlayAgain((prevState) => !prevState);
				}}>
				Play Again
			</button>
		</div>
	);
}

export default App;
