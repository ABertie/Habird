import { Pressable, SafeAreaView, Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

import { Dark, Lightest, Mid } from "../colors";
import TackerNavigation from "./TackerNavgation";
import Weather from "./weather";

export default function HabitScreen({ children, style, navigation, route }) {
    return (
        <SafeAreaView style={[
            style, {
                flex: 1,
                backgroundColor: Lightest,
            }]}>
            <TackerNavigation
                navigation={navigation}
                route={route}
            />
            <View style={{ paddingVertical: 16, }}>
                {children}
            </View>
            <Weather />
            <Pressable
                onPress={() => navigation.navigate('Add')}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: Mid,
                    width: 48,
                    height: 48,
                    borderRadius: 99,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Entypo name="add-to-list" size={24} color={Dark} />
            </Pressable>
        </SafeAreaView>
    )
}