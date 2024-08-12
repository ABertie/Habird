import { Pressable, Text } from "react-native";
import { Dark, Mid } from "../colors";

export default function Submit({ label, onPress, style }) {
    return (
        <Pressable
            style={[style, {
                marginTop: 16,
                width: '100%',
                padding: 8,
                paddingHorizontal: 16,
                backgroundColor: Mid,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }]}
            onPress={onPress}
            type='submit'
        >
            <Text style={{
                textAlign: 'center',
                color: Dark,
            }}>{label}</Text>
        </Pressable>
    )
}