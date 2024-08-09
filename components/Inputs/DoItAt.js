import { StyleSheet, View } from "react-native"
import SelectButton from "./SelectButton"
import { Light } from "../colors"

export default function DoItAt({doItAtSelected, setDoItAtSelected}) {
    return (
        <View style={{
            flexDirection: 'column',
            gap: 8,
        }}>
            <View style={styles.column}>
                <SelectButton
                    label="Morning"
                    selected={doItAtSelected === "Morning" ? true : false}
                    onPress={() => setDoItAtSelected('Morning')}
                    style={styles.button}
                />
                <SelectButton
                    label="Aftermoon"
                    selected={doItAtSelected === "Aftermoon" ? true : false}
                    onPress={() => setDoItAtSelected('Aftermoon')}
                    style={styles.button}
                />
            </View>
            <View style={styles.column}>
                <SelectButton
                    label="Evening"
                    selected={doItAtSelected === "Evening" ? true : false}
                    onPress={() => setDoItAtSelected('Evening')}
                    style={styles.button}
                />
                <SelectButton
                    label="Anytime"
                    selected={doItAtSelected === "Anytime" ? true : false}
                    onPress={() => setDoItAtSelected('Anytime')}
                    style={styles.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    button: {
        backgroundColor: Light,
    }
})