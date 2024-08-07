import { StyleSheet, Text, View } from "react-native";
import { Light, Darkest } from "./colors";

export default function PrimaryNavigation() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Primary Navigation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 64,
    width: 'calc(100%+32)',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: Light,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Darkest,
    textAlign: 'center',
  }
});