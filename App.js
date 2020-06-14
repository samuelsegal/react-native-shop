import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsRedcer from './src/store/reducers/products';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({ products: productsRedcer });

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
