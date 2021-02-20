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
	const imgUrls = [
		'https://picsum.photos/id/171/200/300',
		'https://picsum.photos/id/192/200/300',
		'https://picsum.photos/id/242/200/300',
		'https://picsum.photos/id/412/200/300',
		'https://picsum.photos/id/172/200/300',
		'https://picsum.photos/id/212/200/300',
		'https://picsum.photos/id/182/200/300',
		'https://picsum.photos/id/82/200/300',
	];

	const reFlip = (delay) => {
		setTimeout(() => {
			cards.current.firstCard.element.classList.remove('flip');
			cards.current.secondCard.element.classList.remove('flip');
			cards.current.firstCard = null;
			cards.current.secondCard = null;
		}, delay);
	};

	const checkGameOver = () => {
		if (cards.current.flipedPairs === imgUrls.length) {
			cards.current.flipedPairs = 0;
			setGameOver((prevState) => !prevState);
		}
	};

	const checkMatchingCards = () => {
		if (cards.current.firstCard.url === cards.current.secondCard.url) {
			cards.current.firstCard = null;
			cards.current.secondCard = null;
			cards.current.flipedPairs += 1;
			checkGameOver();
		} else {
			reFlip(1000);
		}
	};

	const handleSelection = (card) => {
		if (card.element.classList.value !== 'flip-card-container') return;
		if (!cards.current.firstCard) {
			cards.current.firstCard = card;
			card.element.classList.add('flip');
		} else if (!cards.current.secondCard) {
			cards.current.secondCard = card;
			card.element.classList.add('flip');
			checkMatchingCards();
			setMoves((prevMoves) => prevMoves + 1);
		}
	};

	const updateScore = () => {
		if (!bestScore || bestScore > moves) {
			setBestScore(moves);
		} else {
			setBestScore(bestScore);
		}
	};

	useEffect(() => {
		updateScore();
		setMoves(0);
		setGameOver(false);
		setCardComponents(() => {
			let components = shuffle(imgUrls).map((url) => {
				return <Card url={url} key={uniqid()} handleClick={handleSelection} />;
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
			{winMsg}
			<div className='gameboard'>{cardComponents}</div>
		</div>
	);
}

export default App;
