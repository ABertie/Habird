import { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Brand, Dark, Darkest, Light, Lightest, Mid } from "../colors";
import DateTimePicker from "react-native-ui-datepicker";
import SelectButton from "../Inputs/SelectButton";
import DatePicker from "../Inputs/DatePicker";
import DoItAt from "../Inputs/DoItAt";

export default function CreateTask() {
    const [name, setName] = useState('')
    const [date, setDate] = useState()
    const [reminders, setReminders] = useState()

    const [doItAtSelected, setDoItAtSelected] = useState('Anytime')
    const [reminderOn, setReminderOn] = useState(false)

    return (
        <View>
            <Text style={styles.text}>Task Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Task Name"
                onChangeText={setName}
                value={name}
            />
            {/* <Text style={styles.text}>Icon</Text> */}
            {/* <Text style={styles.text}>Color</Text> */}
            <Text style={styles.text}>When</Text>
            <DatePicker
                date={date}
                setDate={setDate}
            />
            <Text style={styles.text}>Do it at</Text>
            <DoItAt
                doItAtSelected={doItAtSelected}
                setDoItAtSelected={setDoItAtSelected}
            />
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