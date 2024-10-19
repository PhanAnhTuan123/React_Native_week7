import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './components/ProductListScreen'; // Import màn hình danh sách sản phẩm
import ProductDetailScreen from './components/ProductDetailScreen'; // Import màn hình chi tiết sản phẩm

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Choose your Best food' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}