import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Items from './Components/Items';

import { connect } from 'react-redux';
import ItemForm from './Components/ItemForm';

function App() {
	return (
		<div className='App'>
			<header className='App-header pt-5'>
				<ItemForm />
				<Items />
			</header>
		</div>
	);
}
const mapStateToprops = (state) => {
	return {
		updateItem: state.updateItem,
	};
};
export default connect(mapStateToprops)(App);
