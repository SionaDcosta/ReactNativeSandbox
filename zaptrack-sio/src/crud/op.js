import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import addUser from './adduser' // Adjust the import path as needed
import getUserRole from './getrole'; // Adjust the import path as needed

const ExampleComponent = () => {
  useEffect(() => {
    // Example: Add a user with role 'admin'
    addUser("user123", "admin");

    // Example: Retrieve and log the user's role
    const fetchUserRole = async () => {
      const role = await getUserRole("user123");
      console.log("User role is:", role);
    };

    fetchUserRole();
  }, []);

  return (
    <View>
      <Text>Firestore User Role Example</Text>
    </View>
  );
};

export default ExampleComponent;
