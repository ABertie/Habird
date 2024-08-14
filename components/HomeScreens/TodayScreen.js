import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './HomeScreen';
import { Dark, Light } from '../colors';
import CheckItem from './CheckItem';

export default function TodayScreen({ navigation, route }) {
  const [list, setList] = useState([])
  let keys = []

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
  
  return (
    <HomeScreen navigation={navigation} route={route} >
      {/* {list.length !== 0 */}
         {/* ? <View> */}
          <FlatList
            data={list}
            renderItem={({ item }) => item.IsDone === false && <CheckItem i={item} getKeys={getKeys} />}
            keyExtractor={item => item.Name}
            style={{
              width: '100%',
              gap: 8,
            }}
          />
          <Text style={styles.text}>Is Done:</Text>
          <FlatList
            data={list}
            renderItem={({ item }) => item.IsDone === true && <CheckItem i={item} getKeys={getKeys} done={true} />}
            keyExtractor={item => item.Name}
            style={{
              width: '100%',
              gap: 8,
            }}
          />
        {/* </View> 
         : <View style={{
           width: '100%',
         }}>
           <Text style={styles.text}> Der er ikke noget her</Text>
         </View>
       }*/}
    </HomeScreen>
  )
}


const styles = StyleSheet.create({
  text: {
    color: Dark,
    fontWeight: '500',
    fontSize: 16,
  },
})