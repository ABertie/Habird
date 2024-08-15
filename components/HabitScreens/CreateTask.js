import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Brand, Dark, Light, Mid } from "../colors.js";
import DatePicker from "../Inputs/DatePicker.js";
import TimePicker from "../Inputs/TimePicker.js";
import Submit from "../Inputs/SubmitButton.js";

export default function CreateTask({ navigation, route }) {
    const [date, setDate] = useState('')
    const [reminders, setReminder] = useState()
    const [reminderOn, setReminderOn] = useState(false)
    const [idDate, setIdDate] = useState('')

    const values = {
        id: idDate + ' ' + reminders, // ! sæt Name in here + ' ' + 'Name'
        StartDate: date,
        Reminder: reminders,
        Type: "Task",
        IsDone: false,
        // Name: Name,
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: idDate + '' + reminders,
            Name: "",
            Type: "Task",
            StartDate: "",
            Reminder: "",
            IsDone: false,
        },
        values,
    })

    const onSubmit = async (data) => {
        
        const name = data.Name.split(" ").join("_")
        const value = JSON.stringify(data)

        try {
            await AsyncStorage.setItem(name, value)
            navigation.navigate('Today')
        } catch (e) {
            console.log(e);
            // save error
        }
    }

    return (
        <View style={{ gap: 8, }}>
            <Text style={styles.text}>Task Name</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="Name"
            />
            {errors.TaskName && <Text style={styles.error}>This is required.</Text>}
            {/* <Text style={styles.text}>Icon</Text> */}
            {/* <Text style={styles.text}>Color</Text> */}
            <Text style={styles.text}>Start Date</Text>
            <DatePicker
                date={date}
                setDate={setDate}
                setDefaultDate={true}
                setIdDate={setIdDate}
            />
            {errors.StartDate && <Text style={styles.error}>This is required.</Text>}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text style={styles.text}>Time</Text>
                {/* <Switch
                    trackColor={{ false: Dark + 'aa', true: Light }}
                    thumbColor={reminderOn ? Mid : Dark}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setReminderOn(!reminderOn)}
                    value={reminderOn}
                /> */}
            </View>
            {/* {reminderOn && <TimePicker
                time={reminders}
                setTime={setReminder}
            />} */}
            <TimePicker
                time={reminders}
                setTime={setReminder}
                setDefaultTime={true}
            />
            {errors.Reminder && <Text style={styles.error}>This is required.</Text>}
            <Submit
                label='Save'
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Dark,
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: Light,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    error: {
        color: Brand,
    },
})