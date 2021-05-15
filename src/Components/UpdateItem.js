import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

class UpdateItem extends React.Component {
	state = {
		id: this.props.updateItem.id,
		name: this.props.updateItem.name,
		price: this.props.updateItem.price,
		category: this.props.updateItem.category,
		image: this.props.updateItem.image,
	};
	componentDidMount = () => {
		this.setState({
			updateItem: this.props.updateItem,
		});
	};

	btnUpdate = () => {
		const updatedItem = {
			...this.state,
		};
		// console.log(this.state);
		this.props.addItem(updatedItem);
	};

	render() {
		const clear = '';
		return (
			<>
				<div>Update Item</div>
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
							<button className='btn btn-primary' onClick={this.btnUpdate}>
								Save
							</button>
							<button
								className='btn btn-danger ml-2'
								onClick={() => this.props.btnCancel(clear)}
							>
								Cancel
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
		updateItem: state.updateItem,
		categories: state.categories,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		btnCancel: (clear) => dispatch({ type: 'CANCEL_UPDATE', payload: clear }),
		addItem: (updatedItem) =>
			dispatch({ type: 'SAVE_UPDATE', payload: updatedItem }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
