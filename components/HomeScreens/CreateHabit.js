import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Dark, Light, Mid } from "../colors";
import { useState } from "react";
import DoItAt from "../Inputs/DoItAt";
import DatePicker from "../Inputs/DatePicker";

export default function CreateHabit() {
  const [name, setName] = useState('')
  const [doItAtSelected, setDoItAtSelected] = useState('Anytime')
  const [reminders, setReminders] = useState()

  const [reminderOn, setReminderOn] = useState(false)

  return (
    <View>
      <Text style={styles.text}>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Habit Name"
        onChangeText={setName}
        value={name}
      />
      {/* <Text style={styles.text}>Icon</Text> */}
      {/* <Text style={styles.text}>Color</Text> */}
      <Text style={styles.text}>Repeat</Text>
      <Text style={styles.text}>Do it at</Text>
      <DoItAt
        doItAtSelected={doItAtSelected}
        setDoItAtSelected={setDoItAtSelected}
      />
      {/* <Text style={styles.text}>End Habit on</Text> */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text style={styles.text}>Reminder</Text>
        <Switch
          trackColor={{ false: Dark + 'aa', true: Light }}
          thumbColor={reminderOn ? Mid : Dark}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setReminderOn(!reminderOn)}
          value={reminderOn}
        />
      </View>
      {reminderOn && <DatePicker
        date={reminders}
        setDate={setReminders}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Dark,
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 8,
  },
  input: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: Light,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})