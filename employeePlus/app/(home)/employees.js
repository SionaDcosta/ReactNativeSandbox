import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResults from "../../components/SearchResults";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://10.0.2.2:8000/employees");
        //Use 10.0.2.2 for Android Emulator: Android emulators have a special alias to refer to the host machine's localhost
        console.log("Response from server:", response.data);
        setEmployees(response.data);
      } catch (error) {
        console.log("Error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          style={styles.icon}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="black" style={styles.icon} />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={styles.input}
            placeholder="Search"
          />
          {employees.length > 0 && (
            <Pressable onPress={() => router.push("/(home)/adddetails")}>
              <AntDesign name="pluscircle" size={30} color="#0072b1" />
            </Pressable>
          )}
        </Pressable>
      </View>

      {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={styles.noDataContainer}>
          <Text>No Data</Text>
          <Text>Press the plus button to add an employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign name="pluscircle" size={24} color="black" style={styles.plusButton} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 40,
    flex: 1,
  },
  input: {
    flex: 1,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    marginTop: 30,
  },
});

export default Employees;
