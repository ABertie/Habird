import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodayScreen from "../HomeScreens/TodayScreen";
import WeeklyScreen from "../HomeScreens/WeeklyScreen";
import OverallScreen from "../HomeScreens/OverallScreen";
import AddScreen from "../HomeScreens/AddScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{ 
        headerShown: false ,
        animation: 'none',
      }}
    >
      <HomeStack.Screen
        name="Today"
        component={TodayScreen}
      />
      <HomeStack.Screen
        name="Weekly"
        component={WeeklyScreen}
      />
      <HomeStack.Screen
        name="Overall"
        component={OverallScreen}
      />
      <HomeStack.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitle: 'Create new ...',
        }}
      />
    </HomeStack.Navigator>
  )
}