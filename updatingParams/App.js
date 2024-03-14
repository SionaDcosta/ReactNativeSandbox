import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the home screen of the app</Text>
      <Button
        onPress={() =>
          navigate('Profile', {
            friends: ['Brent', 'Satya', 'Michaś'],
            title: "Brent's Profile",
          })
        }
        title="Go to Brent's profile"
      />
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.friends[0]}</Text>
      <Text>{route.params.friends[1]}</Text>
      <Text>{route.params.friends[2]}</Text>
      <Button
        onPress={() =>
          navigation.setParams({
            friends:
              route.params.friends[0] === 'Brent'
                ? ['Wojciech', 'Szymon', 'Jakub']
                : ['Brent', 'Satya', 'Michaś'],
            title:
              route.params.title === "Brent's Profile"
                ? "Lucy's Profile"
                : "Brent's Profile",
          })
        }
        title="Swap title and friends"
      />
      <Button
        title="Replace this screen with Settings"
        onPress={() =>
          navigation.replace('Settings', {
            someParam: 'Param',
          })
        }
      />
      <Button
        title="Reset navigator state to Settings"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Settings',
                params: { someParam: 'Param1' },
              },
            ],
          })
        }
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings', { someParam: 'Param1' })}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings screen</Text>
      <Text>{route.params.someParam}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        onPress={() =>
          navigation.navigate('Profile', {
            friends: ['Brent', 'Satya', 'Michaś'],
          })
        }
        title="Go to Brent's profile"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
