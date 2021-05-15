import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

class ItemBox extends React.Component {
	render() {
		const { name, price, image, category, id } = this.props.item;
		return (
			<div className='container col-md-3 py-2'>
				<Card className='col-12 bg-dark text-white border p-4'>
					<Card.Img variant='top' src={image} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>
							{price} <br />
							{category}
						</Card.Text>
						{/* <Button variant='primary'>Go somewhere</Button> */}
					</Card.Body>
					<div className='d-md-flex justify-content-sm-around'>
						<button
							className='btn btn-danger mr-2'
							onClick={() => this.props.btnDelete(id)}
						>
							Delete
						</button>
						<button
							className='btn btn-info'
							onClick={() => this.props.btnUpdate(id)}
						>
							Uptdate
						</button>
					</div>
				</Card>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		btnDelete: (id) => dispatch({ type: 'DELETE_ITEM', payload: id }),
		btnUpdate: (id) => dispatch({ type: 'UPDATE_ITEM', payload: id }),
	};
};

export default connect(null, mapDispatchToProps)(ItemBox);
