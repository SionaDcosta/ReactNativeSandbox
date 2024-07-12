import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const SearchResults = ({ data, input }) => {
  const renderItem = ({ item }) => {
    if (!input || item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{item?.employeeName?.charAt(0)}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.employeeName}>{item?.employeeName}</Text>
            <Text style={styles.designation}>
              {item?.designation} ({item?.employeeId})
            </Text>
          </View>
        </View>
      );
    } else {
      return null; // Render nothing if input doesn't match
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id} // Replace with your unique identifier for each item
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4b6cb7",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 16,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  designation: {
    marginTop: 5,
    color: "gray",
  },
});

export default SearchResults;
