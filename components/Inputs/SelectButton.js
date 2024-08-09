import { Pressable, StyleSheet, Text } from "react-native";
import { Dark, Mid } from "../colors";

export default function SelectButton({ label, onPress, selected, style }) {
    return (
        <Pressable style={selected ?
            [styles.button, style, {
                backgroundColor: Mid,
            }]
            : [styles.button, style]} 
            onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderRadius: 8,
        padding: 8,
    },
    text: {
        textAlign: 'center',
        color: Dark,
    }
})