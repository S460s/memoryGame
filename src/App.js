import Card from './components/Card';
import Header from './components/Header';
import shuffle from './helperFunctions';
import uniqid from 'uniqid';
import './styles/app.css';
import { useEffect, useRef, useState } from 'react';
import WinMsg from './components/WinMsg';
function App() {
	let cards = useRef({ firstCard: null, secondCard: null, flipedPairs: 0 });
	const [moves, setMoves] = useState(0);
	const [cardComponents, setCardComponents] = useState([]);
	const [playAgain, setPlayAgain] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [bestScore, setBestScore] = useState(null);
	let imgUrls = useRef([
		'https://picsum.photos/id/1021/200/300',
		'https://picsum.photos/id/1012/200/300',
		'https://picsum.photos/id/922/200/300',
	]);

	const handleClick = (card) => {
		if (card.element.classList.value === 'flip-card-container') {
			if (!cards.current.firstCard) {
				cards.current.firstCard = card;
				card.element.classList.add('flip');
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
				} else {
					setTimeout(() => {
						cards.current.firstCard.element.classList.remove('flip');
						cards.current.secondCard.element.classList.remove('flip');
						cards.current.firstCard = null;
						cards.current.secondCard = null;
					}, 1500);
				}
				setMoves((prevMoves) => prevMoves + 1);
				card.element.classList.add('flip');
			}
		} else {
			console.log('Already fliped');
		}
	};

	useEffect(() => {
		if (!bestScore || bestScore > moves) {
			setBestScore(moves);
		} else {
			setBestScore(bestScore);
		}
		setMoves(0);
		setGameOver(false);
		setCardComponents(() => {
			let components = shuffle(imgUrls.current).map((url) => {
				let id = uniqid();
				return <Card url={url} key={id} handleClick={handleClick} />;
			});
			return components;
		});
	}, [playAgain]);

	let winMsg = gameOver ? (
		<WinMsg flag={playAgain} setFlag={setPlayAgain} moves={moves} />
	) : null;

	return (
		<div className='App'>
			<Header moves={moves} bestScore={bestScore} />
			<div className='gameboard'>{cardComponents}</div>
			{winMsg}
		</div>
	);
}

export default App;
