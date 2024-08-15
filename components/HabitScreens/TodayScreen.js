import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

import HabitScreen from './HabitScreen';
import { Dark, Light } from '../colors';
import CheckItem from './CheckItem';

export default function TodayScreen({ navigation, route }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  async function getKeys() {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {
      // read key error
    }
    if (keys.length === 0) return setList([])
    const List = [
      {
        title: 'To Do',
        data: [],
      },
      {
        title: 'Done',
        data: [],
      },
    ]
    for (let i = 0; i < keys.length; i++) {
      const item = await AsyncStorage.getItem(keys[i])
      JSON.parse(item).IsDone === true ? List[1].data.push(JSON.parse(item)) : List[0].data.push(JSON.parse(item))
    }
    List[0].data.sort((p1, p2) => (p1.id > p2.id) ? +1 : (p1.id < p2.id) ? -1 : 0)
    List[1].data.sort((p1, p2) => (p1.id > p2.id) ? +1 : (p1.id < p2.id) ? -1 : 0)
    setList(List)    
  }

  useEffect(function () {
    getKeys()
    setTimeout(function () {
      setLoading(false)
    }, 100)
  }, [loading === true])


  return (
    <HabitScreen navigation={navigation} route={route} >
      <SectionList
        sections={list}
        ListEmptyComponent={
          <View style={{
            width: '100%',
          }}>
            <Text style={styles.text}>there is nothing here!</Text>
          </View>
        }
        refreshing={loading}
        onRefresh={() => setLoading(true)}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.text}>{title}</Text>
        )}
        // keyExtractor={item => item.id + ' ' + item.Name}
        renderItem={({ item }) => (item.IsDone === false
          ? <CheckItem i={item} setLoading={setLoading} />
          : <CheckItem i={item} setLoading={setLoading} done={true} />
        )}
        ListFooterComponent={
          <View style={{
            height: 128,
          }}></View>
        }
        showsVerticalScrollIndicator={false}
      />
    </HabitScreen>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Dark,
    fontWeight: '500',
    fontSize: 16,
  },
})