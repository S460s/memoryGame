import Card from './components/Card';
import Header from './components/Header';
import shuffle from './helperFunctions';
import './styles/app.css';
function App() {
	let arr = [1, 2, 3, 4, 5];
	console.log(shuffle(arr));

	return (
		<div className='App'>
			<Header />
			<div className='gameboard'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default App;
