import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodayScreen from "../HabitScreens/TodayScreen";
import WeeklyScreen from "../HabitScreens/WeeklyScreen";
import OverallScreen from "../HabitScreens/OverallScreen";
import AddScreen from "../HabitScreens/AddScreen";

const HabitStack = createNativeStackNavigator();

export default function HabitStackScreen() {
  return (
    <HabitStack.Navigator
      screenOptions={{ 
        headerShown: false ,
        animation: 'none',
      }}
    >
      <HabitStack.Screen
        name="Today"
        component={TodayScreen}
      />
      <HabitStack.Screen
        name="Weekly"
        component={WeeklyScreen}
      />
      <HabitStack.Screen
        name="Overall"
        component={OverallScreen}
      />
      <HabitStack.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitle: 'Create new ...',
        }}
      />
    </HabitStack.Navigator>
  )
}