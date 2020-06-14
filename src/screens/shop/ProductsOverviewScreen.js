import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
const ProductsOverviewScreen = (props) => {
	const products = useSelector((state) => state.products.availableProducts);
	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<ProductItem product={itemData.item} onAddToCart={() => {}} onViewDetail={() => {}} />
			)}
		/>
	);
};
ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All Products',
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
