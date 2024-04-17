import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import BottomTabs, {bottomTabsIcons} from '../components/home/BottomTabs';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShopScreen = ({route}) => {

    const { activeTab } = route.params;
  const handleShopButtonPress = (url) => {
    Linking.openURL(url);
  }

  return (
    <>
    <SafeAreaView style={styles.safe} >
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>InstaCommercials</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Men's</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity 
          style={styles.categoryCard}>
            
            <Text style={styles.categoryText}>Shirts</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/shirts-men')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>T-Shirts</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/men-tshirts')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Jeans</Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}
              onPress={() => handleShopButtonPress('https://www.myntra.com/men-jeans')}
              >Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Accessories</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/sunglasses-for-men')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Women's</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Tops</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/women-tops')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Dresses</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/women-dresses')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Jeans</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/women-jeans')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Accessories</Text>
            <TouchableOpacity style={styles.shopButton}
            onPress={() => handleShopButtonPress('https://www.myntra.com/women-accessories')}
            >
              <Text style={styles.shopButtonText}>Shop on Myntra</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
    <BottomTabs icons={bottomTabsIcons} activeTab={activeTab} />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safe:{
    
        flex:1,
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
  },
  shopButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default ShopScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

// const ShopScreen = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={products}
//           renderItem={({ item }) => (
//             <View style={styles.product}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <Text style={styles.price}>${item.price}</Text>
//             </View>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   product: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'green',
//   },
// });

// export default ShopScreen;
