import { SafeAreaView, ScrollView, View } from 'react-native';
import { Light, Lightest } from '../colors';
import SelectButton from '../Inputs/SelectButton';
import { useState } from 'react';
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
      <ScrollView>
        {selected === 'Habit'
          ? <CreateHabit />
          : <CreateTask />
        }
      </ScrollView>
    </SafeAreaView>
  )
}
