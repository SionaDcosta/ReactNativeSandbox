import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Image, Animated } from 'react-native';
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShopScreen = ({ route }) => {
  const { activeTab } = route.params;
  const [scrollY] = useState(new Animated.Value(0));

  // Define the animated title opacity based on the scroll position
  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 100], // Adjust these values as needed
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const categories = [
    {
      title: "Men's",
      items: [
        { name: 'Shirts', image: require('../assets/shop_mensShirt.jpg'), url: 'https://www.myntra.com/shirts-men' },
        { name: 'T-Shirts', image: require('../assets/shop_mensTshirt.jpg'), url: 'https://www.myntra.com/men-tshirts' },
        { name: 'Jeans', image: require('../assets/shop_mensJeans.jpg'), url: 'https://www.myntra.com/men-jeans' },
        { name: 'Sunglasses', image: require('../assets/shop_mensSunglasses.jpg'), url: 'https://www.myntra.com/sunglasses-for-men' }
      ]
    },
    {
      title: "Women's",
      items: [
        { name: 'Tops', image: require('../assets/shop_womensTops.jpg'), url: 'https://www.myntra.com/women-tops' },
        { name: 'Dresses', image: require('../assets/shop_womensDresses.jpg'), url: 'https://www.myntra.com/women-dresses' },
        { name: 'Jeans', image: require('../assets/shop_womensJeans.jpg'), url: 'https://www.myntra.com/women-jeans' },
        { name: 'Sunglasses', image: require('../assets/shop_womensSunglasses.jpg'), url: 'https://www.myntra.com/women-accessories' }
      ]
    }
  ];

  const handleShopButtonPress = (url) => {
    Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>InstaCommercials</Text>
      </View>
      <Animated.ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{category.title}</Text>
            <View style={styles.categoryContainer}>
              {category.items.map((item, itemIndex) => (
                <TouchableOpacity key={itemIndex} style={styles.categoryCard}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text style={styles.categoryText}>{item.name}</Text>
                  <TouchableOpacity style={styles.shopButton} onPress={() => handleShopButtonPress(item.url)}>
                    <Text style={styles.shopButtonText}>Shop on Myntra</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      <BottomTabs icons={bottomTabsIcons} activeTab={activeTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  shopButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  shopButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  header: {
    height: '20%', // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c759e', // Adjust the background color
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
});

export default ShopScreen;
