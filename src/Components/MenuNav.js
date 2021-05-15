import React from 'react';
import { connect } from 'react-redux';

class MenuNav extends React.Component {
	render() {
		return (
			<nav>
				{this.props.categories.map((category) => {
					return (
						<button
							className='btn btn-primary mr-1'
							key={category}
							onClick={() => this.props.btnFilter(category)}
						>
							{category}
						</button>
					);
				})}
			</nav>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		btnFilter: (category) =>
			dispatch({ type: 'FILTER_CATEGORY', payload: category }),
	};
};

export default connect(null, mapDispatchToProps)(MenuNav);
