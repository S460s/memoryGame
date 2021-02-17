import Card from './components/Card';
import Header from './components/Header';
import shuffle from './helperFunctions';
import uniqid from 'uniqid';
import './styles/app.css';
import { useRef } from 'react';
function App() {
	let cards = useRef({ firstCard: null, secondCard: null });

	let imgUrls = [
		'https://picsum.photos/id/1/200/300',
		'https://picsum.photos/id/2/200/300',
	];

	const handleClick = (card) => {
		if (!cards.current.firstCard) {
			cards.current.firstCard = card;
			console.log(cards.current);
			return true;
		} else if (!cards.current.secondCard) {
			cards.current.secondCard = card;
			console.log(cards.current);
			setTimeout(() => {
				cards.current.firstCard.element.classList.remove('flip');
				cards.current.secondCard.element.classList.remove('flip');
			}, 1000);
			return true;
		}
		return false;
	};

	const cardComponents = shuffle(imgUrls).map((url) => {
		let id = uniqid();
		return <Card url={url} key={id} id={id} handleClick={handleClick} />;
	});

	return (
		<div className='App'>
			<Header />
			<div className='gameboard'>{cardComponents}</div>
		</div>
	);
}

export default App;
