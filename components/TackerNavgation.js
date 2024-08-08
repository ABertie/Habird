import { StyleSheet, View } from "react-native";
import TackerButton from "./TackerButton";
import { Light } from "./colors";

export default function TackerNavigation({ navigation, route }) {
    const selected = route.name

    return (
        <View style={styles.navigation}>
            <TackerButton
                label="Today"
                selected={selected === "Today" ? true : false}
                onPress={() => navigation.navigate('Today')}
            />
            <TackerButton
                label="Weekly"
                selected={selected === "Weekly" ? true : false}
                onPress={() => navigation.navigate('Weekly')}
            />
            <TackerButton
                label="Overall"
                selected={selected === "Overall" ? true : false}
                onPress={() => navigation.navigate('Overall')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Light,
        borderRadius: 8,
    },
})