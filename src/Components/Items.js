import React from 'react';
import { connect } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ItemBox from './ItemBox';
import MenuNav from './MenuNav';
import UpdateItem from './UpdateItem';

class Items extends React.Component {
	render() {
		let items = this.props.items;
		if (this.props.category !== 'All') {
			items = this.props.items.filter((item) => {
				return item.category === this.props.category;
			});
		}
		return (
			<>
				<h1>Menu</h1>

				<MenuNav categories={this.props.categories} />
				<div className='bg-dark col-md-12 d-md-flex flex-wrap mt-3'>
					{items.map((item) => {
						return <ItemBox item={item} key={item.id} />;
					})}
				</div>
			</>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		items: store.items,
		categories: store.categories,
		category: store.category,
	};
};

export default connect(mapStateToProps)(Items);
