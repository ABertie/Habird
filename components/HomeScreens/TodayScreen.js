import { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

export default function TodayScreen({ navigation, route }) {
  let keys = []
  const [list, setList] = useState([])

  useEffect(function () {
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
    getKeys()
  }, [])
  

  return (
    <HomeScreen navigation={navigation} route={route} >
      {list.length !== 0
        ? list.map((i) => { return (<Text key={i.Name}>{i.Name}</Text>) })
        : <Text>Der er ikke noget her</Text>}
    </HomeScreen>
  )
}
