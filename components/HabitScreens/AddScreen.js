import { SafeAreaView, View } from 'react-native';
import { useState } from 'react';

import SelectButton from '../Inputs/SelectButton';
import { Light, Lightest } from '../colors';
import CreateHabit from './CreateHabit';
import CreateTask from './CreateTask';

export default function AddScreen({ navigation, route }) {
  const [selected, setSelected] = useState('Task')

  return (
    <SafeAreaView style={{
      backgroundColor: Lightest,
      flex: 1,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Light,
        borderRadius: 8,
        marginBottom: 16,
      }}>
        <SelectButton
          label="Regular Habit"
          selected={selected === "Habit" ? true : false}
          onPress={() => setSelected('Habit')}
        />
        <SelectButton
          label="One-Time Task"
          selected={selected === "Task" ? true : false}
          onPress={() => setSelected('Task')}
        />
      </View>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      > */}
      {selected === 'Habit'
        ? <CreateHabit navigation={navigation} route={route} />
        : <CreateTask navigation={navigation} route={route} />
      }
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}
