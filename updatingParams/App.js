import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
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
      
      <Button
        onPress={() =>
          navigation.navigate('Profile', {
            friends: ['Brent', 'Satya', 'Michaś'],
          })
        }
        title="Go to Brent's profile"
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://www.48hourslogo.com/oss/works/2022/01/13/21255711641/115168_45900_fc8ca08f-43ca-45b0-9147-3c86b3eb880a.jpg' }}
    />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{headerTitle: (props) => <LogoTitle {...props}/>,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#00cc00"
            />
          ),}}/>
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
