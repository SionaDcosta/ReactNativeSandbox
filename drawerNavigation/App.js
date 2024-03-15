import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ drawerPosition:"right"}}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
