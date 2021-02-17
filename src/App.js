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
	let imgUrls = [1, 2, 3];

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
			let components = shuffle(imgUrls).map((url) => {
				let id = uniqid();
				return <Card url={url} key={id} id={id} handleClick={handleClick} />;
			});
			return components;
		});
	}, []);

	return (
		<div className='App'>
			<Header moves={moves} bestScore={123} />
			<div className='gameboard'>{cardComponents}</div>
		</div>
	);
}

export default App;
