import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

class AddItemForm extends React.Component {
	state = {
		name: '',
		price: '',
		category: '',
		image: '',
	};

	btnAddItem = () => {
		const newItem = {
			...this.state,
		};
		// console.log(this.state);
		this.props.addItem(newItem);
		this.setState({
			name: '',
			price: '',
			category: '',
			image: '',
		});
	};
	render() {
		return (
			<>
				<div>Add Item</div>

				<div className='col-4 p-3'>
					<Row>
						<Col>
							Name:
							<Form.Control
								placeholder='Name'
								value={this.state.name}
								onChange={(e) => this.setState({ name: e.target.value })}
							/>{' '}
							<br />
							Price:
							<Form.Control
								as='input'
								placeholder='Price'
								value={this.state.price}
								onChange={(e) => this.setState({ price: e.target.value })}
							/>{' '}
							<br />
							Category:
							<Form.Control
								as='select'
								value={this.state.category}
								onChange={(e) => this.setState({ category: e.target.value })}
							>
								{this.props.categories.map((category) => {
									return <option key={category}>{category}</option>;
								})}
							</Form.Control>{' '}
							<br />
							Iamge:
							<Form.Control
								placeholder='Image'
								value={this.state.image}
								onChange={(e) => this.setState({ image: e.target.value })}
							/>{' '}
							<br />
							<button className='btn btn-primary' onClick={this.btnAddItem}>
								Save
							</button>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (newItem) => dispatch({ type: 'ADD_ITEM', payload: newItem }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
