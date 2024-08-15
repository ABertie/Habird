import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import HabitStackScreen from './components/Stacks/HabitStack';
import { Dark, Light, Lightest } from './components/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      sceneContainerStyle={{
        backgroundColor: Lightest,
        padding: 16,
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
          name="Habit"
          component={HabitStackScreen}
          options={{ 
            tabBarIcon: () => <FontAwesome5 name="tasks" size={24} color={Dark} />,
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
