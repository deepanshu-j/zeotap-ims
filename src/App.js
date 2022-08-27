import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import InputField from './components/InputField';

import CsvInterface from '../src/components/CsvInterface';

import Button from 'react-bootstrap/Button';

function App() {
	const submitButton = () => {};

	return (
		<div>
			<div>
				<NavBar />
			</div>
			<br />
			<div className="main__container">
				<h3 className="main__containerTitle">Upload Your CSV File</h3>
				{/* <InputField /> */}
				<div>
					<CsvInterface />
				</div>
			</div>
		</div>
	);
}

export default App;
