import { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Brand, Dark, Darkest, Light, Mid } from '../colors';
import Feather from '@expo/vector-icons/Feather';

export default function TodayScreen({ navigation, route }) {
  let keys = []
  const [list, setList] = useState([])

  async function getKeys() {
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {
      // read key error
    }
    if (keys.length === 0) return
    let List = []
    for (let i = 0; i < keys.length; i++) {
      const item = await AsyncStorage.getItem(keys[i])
      List.push(JSON.parse(item))
    }
    setList(List)
  }

  useEffect(function () {
    getKeys()
  }, [])

  async function CheckHandler(i) {
    i.IsDone = true
    try {
      await AsyncStorage.mergeItem(i.Name, JSON.stringify(i))
    } catch (e) {
    }
    getKeys()
  }

  async function deleteHandler(i) {
    // ! lav en er du sikker dims
    try {
      await AsyncStorage.removeItem(i.Name)
    } catch (e) {
    }
    getKeys()
  }

  const Item = ({ i, done }) => (
    <View style={{
      justifyContent: 'center',
      marginBottom: 8,
    }}>
      {!done && <Pressable
        onPress={() => CheckHandler(i)} // * make a virbration
        style={[styles.buttonEffekt, {
          paddingHorizontal: 8,
          position: 'absolute',
          backgroundColor: Brand,
          zIndex: 1,
          right: 4,
          flexDirection: 'row',
        }]}>
        <Feather name="check-circle" size={32} color={Dark} />
      </Pressable>}
      <View
        style={[styles.buttonEffekt, done === true && { backgroundColor: Dark + 33 }]}>
        <Text style={StyleSheet.text}>
          {i.Name}
        </Text>
        <Text style={{
          color: Darkest + 55,
        }}>
          {i.Reminder} {i.StartDate}
        </Text>
      </View>
      {done && <Pressable
        onPress={() => deleteHandler(i)}
        style={[styles.buttonEffekt, {
          paddingHorizontal: 8,
          position: 'absolute',
          right: 4,
          backgroundColor: Mid,
          zIndex: 1,
        }]}>
        <Feather name="trash" size={32} color={Dark} />
      </Pressable>}
    </View>
  );

  return (
    <HomeScreen navigation={navigation} route={route} >
      {list.length !== 0
        ? <View>
          <FlatList
            data={list}
            renderItem={({ item }) => item.IsDone === false && <Item i={item} />}
            keyExtractor={item => item.Name}
            style={{
              width: '100%',
              gap: 8,
            }}
          />
          <Text style={styles.text}>Is Done:</Text>
          <FlatList
            data={list}
            renderItem={({ item }) => item.IsDone === true && <Item i={item} done={true} />}
            keyExtractor={item => item.Name}
            style={{
              width: '100%',
              gap: 8,
            }}
          />
        </View>
        : <View style={{
          width: '100%',
        }}>
          <Text style={styles.text}> Der er ikke noget her</Text>
          {/* <Pressable
            onPress={() => getKeys()}
            style={styles.buttonEffekt}
          ><Text style={styles.text}>Reload</Text></Pressable> */}
        </View>
      }
    </HomeScreen>
  )
}


const styles = StyleSheet.create({
  text: {
    color: Dark,
    fontWeight: '500',
    // textAlign: 'auto',
    fontSize: 16,
  },
  buttonEffekt: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: Light,
    borderRadius: 8,
  }
})