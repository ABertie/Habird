import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HomeStackScreen from './components/Stacks/HomeStack';
import { Dark, Light, Lightest, Mid } from './components/colors';
import AddScreen from './components/HomeScreens/AddScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator 
      sceneContainerStyle={{
        padding: 16,
        backgroundColor: Lightest,
      }}
      screenOptions={{ 
        animation: 'shift',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          // backgroundColor: Light,
          borderRadius: 99,
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarInactiveBackgroundColor: {
          backgroundColor: Light,
        }
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ 
            tabBarIcon: () => <FontAwesome name="home" size={32} color={Dark} />,
          }}
        />
      </Tab.Navigator>
      <StatusBar
        style="auto"
        backgroundColor={Lightest}
        translucent={false}
      />
    </NavigationContainer>
  );
}
