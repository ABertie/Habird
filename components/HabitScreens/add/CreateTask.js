import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Brand, Dark, Light } from "../../colors.js";
import DatePicker from "../../Inputs/DatePicker.js";
import TimePicker from "../../Inputs/TimePicker.js";
import Submit from "../../Inputs/SubmitButton.js";

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
            // id: btoa(new Date()),
            // name: '',
            // date: '', 
            // time: {
            //     time: 0,
            //     point: {
            //         start: '',
            //         end: ''
            //     }
            // },
            // description: '',
            // reminders: [],
            // tag: [],
            // repeat: null,
            // trackings: {
            //      showEactDay: false,
            //      done: false
            // }, 
            // sequence: '',
            // type: "Task",
            Sequence: '',
            Name: '',
            Type: "Task",
            Date: {
                Start: '',
                end: '',
            },
            Reminder: '',
            data: [
                { IsDone: false, }
            ]
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
            // name: name,
            // date: date, 
            // time: {
            //     time: time,
            //     point: {
            //         start: start,
            //         end: end
            //     }
            // },
            // description: description,
            // reminders: [ reminders ],
            // tag: [ tags ],
            // trackings: {
            //      showEactDay: showEactDay,
            // }, 
            // sequence: date + time + reminders + name + tag,
        }
    })

    // id: string, // required // timestamp i base 64
    // name: string,
    // date: string, 
    // time: {
    //     time: number,
    //     point: {
    //         start: string,
    //         end: string
    //     }
    // },
    // description: string,
    // reminders: [
    //     {
    //         daysbefore: number,
    //         time: string,
    //         message: string,
    //     }
    // ],
    // tag: [ string ], // tag ids // required 1
    // repeat: null,
    // trackings: {
    //      showEactDay: null, 
    //      done: false 
    // }, // required
    // sequence: string, // date + time.start + reminders + name + tag // required
    // type: "Task", // required

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
            navigation.navigate('Today', { reload: true })
        } catch (e) {
            console.log(e);
            // save error
        }
    }

    return (
        <View style={{ gap: 8, }}>

            <View style={styles.row}>
                <Text style={styles.text}>Name</Text>
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
            </View>
            {errors.Name && <Text style={styles.error}>This is required. {errors.Name}</Text>}

            <View style={styles.row}>
                <Text style={styles.text}>Description</Text>
                <Text style={styles.text}>(optional)</Text>
            </View>
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
                name="Description"
            />
            {errors.Name && <Text style={styles.error}>This is required. {errors.Name}</Text>}

            <View style={styles.row}>
                <Text style={styles.text}>Tag</Text>
                <Text style={styles.text}>(at least one)</Text>
            </View>
            {/*// TODO: TAGS */}

            <View style={styles.row}>
                <Text style={styles.text}>Checklist</Text>
                {/*// TODO: CHECKLIST */}
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Date</Text>
                {/*// TODO: NEW DATE PICKER + TIME PICKER */}
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Reminder</Text>
                {/*// TODO: NEW REMINDER */}
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Show eacth day until done</Text>
                {/*// TODO: PICKER */}
            </View>


            {/* <Text style={styles.text}>Icon</Text> 
            {/* <Text style={styles.text}>Color</Text> 
            <Text style={styles.text}>Start Date</Text>
            <DatePicker
                date={date}
                setDate={setDate}
                setDefaultDate={true}
                setSequenceDate={setSequenceDate}
            />
            {/* {errors.Date.Start && <Text style={styles.error}>This is required.</Text>} 
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
                /> 
            </View>
            {/* {reminderOn && <TimePicker
                time={reminders}
                setTime={setReminder}
                setDefaultTime={true}
            />} 
            <TimePicker
                time={reminders}
                setTime={setReminder}
                setDefaultTime={true}
            />
            {errors.Reminder && <Text style={styles.error}>This is required.</Text>} */}

            <View style={styles.row}>
                {/*// TODO: CANSEL BUTTON */}
                <Submit
                    label='Save'
                    onPress={handleSubmit(onSubmit)}
                />
            </View>

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
        width: '100%',
        flexDirection: 'row',
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 8,

    },
    error: {
        color: Brand,
    },
})