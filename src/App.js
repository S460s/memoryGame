import Card from './components/Card';
import Header from './components/Header';
import shuffle from './helperFunctions';
import uniqid from 'uniqid';
import './styles/app.css';
function App() {
	let arr = [
		'https://picsum.photos/id/1/200/300',
		'https://picsum.photos/id/2/200/300',
	];

	const cardComponents = shuffle(arr).map((url) => {
		let id = uniqid();
		return <Card url={url} key={id} id={id} />;
	});

	return (
		<div className='App'>
			<Header />
			<div className='gameboard'>{cardComponents}</div>
		</div>
	);
}

export default App;
