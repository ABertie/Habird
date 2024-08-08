import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackScreen from './components/HomeStack';
import { View } from 'react-native';
import { Lightest } from './components/colors';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
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
