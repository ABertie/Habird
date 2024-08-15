import { StyleSheet, View } from "react-native";
import SelectButton from "../Inputs/SelectButton";
import { Light } from "../colors";

export default function TackerNavigation({ navigation, route }) {
    const selected = route.name
    
    return (
        <View style={styles.navigation}>
            <SelectButton
                label="Today"
                selected={selected === "Today" ? true : false}
                onPress={() => navigation.navigate('Today')}
            />
            <SelectButton
                label="Weekly"
                selected={selected === "Weekly" ? true : false}
                onPress={() => navigation.navigate('Weekly')}
            />
            <SelectButton
                label="Overall"
                selected={selected === "Overall" ? true : false}
                onPress={() => navigation.navigate('Overall')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Light,
        borderRadius: 8,
    },
})