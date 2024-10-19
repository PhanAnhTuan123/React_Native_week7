import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryText}>Delivery in 30 min</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.restaurantInfo}>
        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
      </Text>

      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  deliveryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryText: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 50,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  restaurantInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  cartButton: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
