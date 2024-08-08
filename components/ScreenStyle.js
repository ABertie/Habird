import { View } from "react-native";
import { Lightest } from "./colors";

export default function Wrapper({ children, style }) {
    return (
        <View style={[
            style, {
                flex: 1,
                backgroundColor: Lightest,
                alignItems: 'center',
                padding: 16,
            }]}>
            {children}
        </View>
    )
}