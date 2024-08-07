import { StyleSheet, View } from "react-native";
import TackerViewButton from "./TackerViewButton";
import { Light } from "./colors";

export default function TackerViewNavigation() {
    return (
        <View style={styles.navigation}>
            <TackerViewButton label="Today" selected/>
            <TackerViewButton label="Weekly" />
            <TackerViewButton label="Overall" />
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