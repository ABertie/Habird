import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Brand, Dark, Light } from "../colors.js";
import DatePicker from "../Inputs/DatePicker.js";
import TimePicker from "../Inputs/TimePicker.js";
import Submit from "../Inputs/SubmitButton.js";

export default function CreateTask({ navigation, route }) {
    const [date, setDate] = useState('')
    const [reminders, setReminder] = useState()
    const [reminderOn, setReminderOn] = useState(false)
    const [name, setName] = useState('')
    const [SequenceDate, setSequenceDate] = useState('')

    // const values = {
    //     Sequence: SequenceDate + ' ' + reminders + ' ' + name,
    //     Name: name,
    //     Type: "Task",
    //     Date: {
    //         Start: date,
    //     },
    //     Reminder: reminders,
    //     IsDone: false,
    // }

    // type FormInputs = {
    //     username: string
    //   }

    const {
        control,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Sequence: '',
            Name: '',
            Type: "Task",
            Date: {
                Start: '',
            },
            Reminder: '',
            IsDone: false,
        },
        values: {
            Sequence: SequenceDate + ' ' + reminders + ' ' + name,
            Name: name,
            Type: "Task",
            Date: {
                Start: date,
            },
            Reminder: reminders,
            IsDone: false,
        }
    })

    useEffect(() => {
        setName(watch("Name"))
    }, [watch("Name")])

    const onSubmit = async (data) => {
        const keyName = data.Name.split(" ").join("_")

        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys()
        } catch (e) {
        // read key error
        }

        // console.log();
        keys.includes(keyName) && setError("Name", {
            type: "custom",
            message: "Name already exists",
        })
        // keys.includes(keyName) && console.log('noo')

        const value = JSON.stringify(data)

        try {
            await AsyncStorage.setItem(keyName, value)
            navigation.navigate('Today', {reload: true})
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
            {errors.Name && <Text style={styles.error}>This is required. {errors.Name}</Text>}
            {/* <Text style={styles.text}>Icon</Text> */}
            {/* <Text style={styles.text}>Color</Text> */}
            <Text style={styles.text}>Start Date</Text>
            <DatePicker
                date={date}
                setDate={setDate}
                setDefaultDate={true}
                setSequenceDate={setSequenceDate}
            />
            {/* {errors.Date.Start && <Text style={styles.error}>This is required.</Text>} */}
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
                setDefaultTime={true}
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