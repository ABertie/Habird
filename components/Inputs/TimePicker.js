import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import DynamicallySelectedPicker from "react-native-dynamically-selected-picker";
import Feather from '@expo/vector-icons/Feather';

import SelectButton from "./SelectButton";
import { Dark, Darkest, Light, Lightest } from "../colors";

export default function TimePicker({ time, setTime, setDefaultTime = false }) {
    const CurrentHour = Number(new Date().getHours())
    const CurrentMinutes = Number(new Date().getMinutes())
    const [picker, setPicker] = useState(false)
    const [hour, setHour] = useState(CurrentHour)
    const [minute, setMinute] = useState(CurrentMinutes)
    const TimeString = hour + ":" + minute

    useEffect(function () {
        if (setDefaultTime === true) setTime(TimeString)
    }, [])

    const hours = []
    for (let i = 0; i < 24; i++) {
        hours.push({
            value: i,
            label: i,
        })
    }
    function runHour(index) {
        setHour(hours[index].value)
        setTime(TimeString)
    }

    const minutes = []
    for (let i = 0; i < 60; i++) {
        minutes.push({
            value: i,
            label: i,
        })
    }
    function runMinute(index) {
        setMinute(minutes[index].value)
        setTime(TimeString)
    }

    return (
        <>
            <View style={{
                padding: 8,
                paddingLeft: 16,
                backgroundColor: Light,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <TextInput
                    style={{
                        color: Dark,
                    }}
                    readOnly={true}
                    value={time}
                />
                <SelectButton
                    style={{
                        flex: 0,
                        borderRadius: 99,
                    }}
                    selected={true}
                    label={<Feather name="edit-3" size={16} color={Darkest} />}
                    onPress={() => {
                        setPicker(!picker)
                        setTime(TimeString)
                    }}
                />
            </View>
            {picker && <>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <DynamicallySelectedPicker
                        items={hours}
                        onScroll={({ index }) => runHour(index)}
                        onMomentumScrollBegin={({ index }) => runHour(index)}
                        onMomentumScrollEnd={({ index }) => runHour(index)}
                        onScrollBeginDrag={({ index }) => runHour(index)}
                        onScrollEndDrag={({ index }) => runHour(index)}
                        transparentItemRows={1}
                        initialSelectedIndex={CurrentHour}
                        allItemsColor={Dark}
                        selectedItemBorderColor={Lightest}
                        height={128}
                        width={150}
                    />
                    <Text style={{
                        fontSize: 20,
                    }}>:</Text>
                    <DynamicallySelectedPicker
                        items={minutes}
                        onScroll={({ index }) => runMinute(index)}
                        onMomentumScrollBegin={({ index }) => runMinute(index)}
                        onMomentumScrollEnd={({ index }) => runMinute(index)}
                        onScrollBeginDrag={({ index }) => runMinute(index)}
                        onScrollEndDrag={({ index }) => runMinute(index)}
                        transparentItemRows={1}
                        initialSelectedIndex={CurrentMinutes}
                        allItemsColor={Dark}
                        selectedItemBorderColor={Lightest}
                        height={128}
                        width={150}
                    />
                </View>
                {!setDefaultTime && <SelectButton
                    style={{ flex: 0 }}
                    label="Reset date"
                    selected={true}
                    onPress={() => {
                        setTime()
                        setPicker(!picker)
                    }}
                />}
            </>}
        </>
    )
}