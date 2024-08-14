import { Pressable, SafeAreaView, Text, View } from "react-native";

import { Dark, Lightest, Mid } from "../colors";
import TackerNavigation from "./TackerNavgation";
import Weather from "./weather";

export default function HomeScreen({ children, style, navigation, route }) {
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
                }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 32,
                    fontWeight: 300,
                    color: Dark,
                }}>+</Text>
            </Pressable>
        </SafeAreaView>
    )
}