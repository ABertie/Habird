import { Pressable, StyleSheet, Text } from "react-native";
import { Dark, Mid } from "./colors";

export default function TackerButton({ label, onPress, selected }) {
    return (
        <Pressable style={selected ?
            [styles.button, {
                backgroundColor: Mid,
            }]
            : styles.button} 
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