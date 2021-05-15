import { v4 } from 'uuid';
import store from './store';

const initialState = {
	updateItem: '',
	//  {
	// 	name: 'awd',
	// 	price: '',
	// 	image: '',
	// },

	category: 'All',
	categories: ['All', 'Food', 'Drink', 'Dessert'],
	items: [
		{
			id: v4(),
			name: 'Burger',
			price: 50,
			category: 'Food',
			image: 'https://image.flaticon.com/icons/svg/1046/1046784.svg',
		},
		{
			id: v4(),
			name: 'Pizza',
			price: 100,
			category: 'Food',
			image: 'https://image.flaticon.com/icons/svg/1046/1046771.svg',
		},
		{
			id: v4(),
			name: 'Fries',
			price: 25,
			category: 'Food',
			image: 'https://image.flaticon.com/icons/svg/1046/1046786.svg',
		},
		{
			id: v4(),
			name: 'Coffee',
			price: 35,
			category: 'Drink',
			image: 'https://image.flaticon.com/icons/svg/1046/1046785.svg',
		},
		{
			id: v4(),
			name: 'Iced Tea',
			price: 45,
			category: 'Drink',
			image: 'https://image.flaticon.com/icons/svg/1046/1046782.svg',
		},
		{
			id: v4(),
			name: 'Hot Tea',
			price: 45,
			category: 'Drink',
			image: 'https://image.flaticon.com/icons/svg/1046/1046792.svg',
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			let newItem = action.payload;
			newItem.id = v4();
			let itemsCopy = [...state.items];
			itemsCopy.unshift(newItem);
			return {
				...state,
				items: itemsCopy,
			};
		case 'DELETE_ITEM':
			const id = action.payload;
			let filteredItems = state.items.filter((item) => item.id !== id);
			return {
				...state,
				items: filteredItems,
			};
		case 'UPDATE_ITEM':
			const idToUpdate = action.payload;
			let itemToUpdate = state.items.filter((item) => item.id === idToUpdate);
			return {
				...state,
				updateItem: itemToUpdate.shift(),
			};
		case 'CANCEL_UPDATE':
			const cancel = action.payload;
			return {
				...state,
				updateItem: cancel,
			};
		case 'SAVE_UPDATE':
			const updatedItem = action.payload;
			let itemsCopyForUpdate = state.items.filter(
				(item) => item.id !== updatedItem.id
			);
			itemsCopyForUpdate.unshift(updatedItem);
			return {
				...state,
				items: itemsCopyForUpdate,
				updateItem: '',
			};
		case 'FILTER_CATEGORY':
			const category = action.payload;

			return {
				...state,
				category: category,
			};
		default:
			return state;
	}
};

export default reducer;
