import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import PrimaryNavigation from './components/PrimaryNavigation';
import TackerViewNavigation from './components/TackerViewNavgation';
import { Brand, Dark, Darkest, Lightest } from './components/colors';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <TackerViewNavigation />
        <CalendarStrip
          scrollable
          style={{
            width: '100%',
            height: 64,
            paddingTop: 20,
            paddingBottom: 10
          }}
          dateNumberStyle={{ color: Dark }}
          dateNameStyle={{ color: Dark }}
          highlightDateNumberStyle={{ color: Brand, }}
          dateContainerStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: Darkest,
          }}
          iconContainer={{ flex: 0.1 }}
          showMonth={false}
        />
      </View>
      <View style={styles.list}>

      </View>
      {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
      <PrimaryNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Lightest,
    alignItems: 'center',
    marginTop: 32,
  },
  text: {
    color: Brand,
  },
  list: {
    height: '100%',
    width: '100%',
    borderTopColor: Dark,
    borderTopWidth: 1,
    alignItems: 'center',
    padding: 16,
  },
  space: {
    // flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
