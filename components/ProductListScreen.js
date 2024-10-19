import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const products = [
  { id: '1', name: 'Tasty Donut', price: 10, image: 'https://s3-alpha-sig.figma.com/img/c9d1/39c5/85ab3ff232f0393dadc123479bf3e593?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVaPekJXeqC09g0ZzT3SuEwX74bJgt8ULvWWHXIVY7VPcWXh5JOF~mojTqNSXezdgUukWp5pvT78xcHtXuaHwMPonS6jmf3TVMiZccynLTcIofNoEpCIT1AZd1EVkhEOvvUx4vuLGx-BzjZtOzKefQ9gg~fSRieFYEEoebG2a~r-DyKTmL9in8q6kDd2BOnAddbpj6c5CoGfY0j49DoFbLs6BlGhyTMV5XZHMK~j4LDsxSs1uFD7xH5I0CPfMMS0e1z41KVjiylzQ8h9m-gSRy-MnEpGFVEvL8LXuxRgcwgP6jEY4OhCUKil6O6oXFomRbW8gFXrU9sZG8cJ83t7Qw__', description: 'Spicy tasty donut family' },
  { id: '2', name: 'Pink Donut', price: 20, image: 'https://s3-alpha-sig.figma.com/img/8774/97c9/b8e5d462310f9e9e7306b875da0066c1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMvnQA5pYwZpYOq4vEqZ6tEcRXraCxede6gde7xsXtjbcaWkE6rzjGgGYmNCrqSk~0vEzhWPBkyCqkBspf74aufUGA7mIqoOTYHG~LdgZif0nZKRFKqRZtLgHFp~AZFIj9pKJz5Ti94wtSt1~aXom0kxVzetTf1FgY3y86JCA9lcrb1-RYIsGlYOvhPkSoefKyfUf1FxyY~ZczB1DHHa5SOzLLLwvEgxDTNpnpKNCOyThE0za4a0AIlElV8OQ0Jb1GLZcbJ6u9hffv2NPAvdG-ggjd6SbqlF1Qoo~fRz1R4WZAH1bBjV2FN731iYMU6reNVNu1qI0Tyzoyd6WwGPrg__', description: 'Spicy tasty donut family' },
  { id: '3', name: 'Floating Donut', price: 30, image: 'https://s3-alpha-sig.figma.com/img/066f/14c6/d5a5c8550fa84d066faa5ca6925eee5d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6rrUk8AA9D9KA3-v5lXuea74cupX2zbNNZfC8E875hB6BJ1tES2DY0lt~ud9Sk9AbHYDFHIuNiSKGu7cWepkfuYhpfbn8r2r0kIsVGeTVufQQE99VWy4tYXDZluJmzF8SHLp-btjMau3~XbHeasUElBEdHtebE~VqvvSoo7Gpz3NNe2NBC5KU2S4sj6NCKHM2A1gif2zr663XBnUA0Aj0t3-fna1FmOSrCScVijVJy5-7K3olTD~lkfWWfh9hQzlJpGDYEDmloqmtVkkDj9i7r16eHXdkVLP6AL3YdAXSbZJV-rrKikGYFW9axtSkuaZWkn83ox69Ag45Nb-~6E0A__', description: 'Spicy tasty donut family' },
  { id: '4', name: 'Tasty Donut', price: 15, image: 'https://s3-alpha-sig.figma.com/img/7464/ccf2/7b800e338cacb2d4fca887f25a0eb423?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyIlCYRNmcHi3jRBTUh4MS5wgmx~O2yLBQW-wszJy0oXfGTfujeONEfeo5XPp8PMzw2D03TBAstQ09-wT5pX3NeOnRRdVget38W3BDoyJhplB3nRsw4cJIoAM~1hrPnDjEJ7iDwGByxM2rl1BvpF~ez1hVAAH27hA3XuTsunJ7vr~lDl4-QWkN3uMKyCZGfjVnrx24OWDpjeLnpdNYHzJ~MHq4EYd1jjloK~Hl9AogppCWmeDa47iZzFxDhnk5DRfPF6rCfIPKRu0JukUqtVSwLBoFGc~x~TEiNsV0dZh6n-bhZzfHhDtVbGYDwDKOecw0Ba-F22WBeuRPbDWDHC3Q__', description: 'Spicy tasty donut family' }
];

const ProductListScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('donut');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Jala!</Text>
        <Text style={styles.headerText}>Choice your Best food</Text>
        <TextInput style={styles.searchInput} placeholder="Search food" />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'donut' && styles.activeTab]}
          onPress={() => setSelectedCategory('donut')}
        >
          <Text style={styles.tabText}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'pinkDonut' && styles.activeTab]}
          onPress={() => setSelectedCategory('pinkDonut')}
        >
          <Text style={styles.tabText}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedCategory === 'floatingDonut' && styles.activeTab]}
          onPress={() => setSelectedCategory('floatingDonut')}
        >
          <Text style={styles.tabText}>Floating</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  activeTab: {
    backgroundColor: '#ffcc00',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 12,
    color: '#888',
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 50,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
