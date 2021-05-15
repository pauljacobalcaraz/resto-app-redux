import React from 'react';
import { connect } from 'react-redux';
import AddItemForm from './AddItemForm';
import UpdateItem from './UpdateItem';

class ItemForm extends React.Component {
	render() {
		return (
			<>{this.props.updateItem === '' ? <AddItemForm /> : <UpdateItem />}</>
		);
	}
}

const mapStateToprops = (state) => {
	return {
		updateItem: state.updateItem,
	};
};
export default connect(mapStateToprops)(ItemForm);
