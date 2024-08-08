import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodayScreen from "./TodayScreen";
import WeeklyScreen from "./WeeklyScreen";
import OverallScreen from "./OverallScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
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
    </HomeStack.Navigator>
  )
}