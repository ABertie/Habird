import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import DynamicallySelectedPicker from "react-native-dynamically-selected-picker";
import Feather from '@expo/vector-icons/Feather';

import SelectButton from "./SelectButton";
import { Dark, Darkest, Light, Lightest } from "../colors";

export default function DatePicker({ date, setDate, setDefaultDate = false, setIdDate }) {
    const [test, setTest] = useState(dateString)
    const CurrentYear = Number(new Date().getFullYear())
    const CurrentMonth = Number(new Date().getMonth())
    const CurrentDay = Number(new Date().getDate())
    const [year, setYear] = useState(CurrentYear)
    const [monthNum, setMonthNum] = useState(CurrentMonth + 1)
    const month = new Date(year, monthNum - 1).toLocaleString('en-US', { month: 'short' })
    const [day, setDay] = useState(CurrentDay)
    const dayOfTheWeek = new Date(year, monthNum - 1, day).toLocaleString('en-US', { weekday: 'short' })
    const [picker, setPicker] = useState(false)
    const dateString = dayOfTheWeek + " " + day + " " + month + " " + year
    const idDateString = year + ' ' + monthNum < 10 ? '0' + monthNum : monthNum + ' ' + day < 10 ? '0' + day : day

    const years = []
    const months = []
    const days = []

    useEffect(function () {
        if (setDefaultDate === true) {
            setDate(dateString)
            setIdDate(idDateString)
        }
    }, [])

    for (let i = Number(CurrentYear); i < CurrentYear + 101; i++) {
        years.push({
            value: i,
            label: i,
        })
    }

    for (let i = 0; i < 12; i++) {
        months.push({
            value: i + 1,
            label: new Date(year, i).toLocaleString('en-US', { month: 'short' }),
        })
    }

    for (let i = 1; i < new Date(year, monthNum, 0).getDate() + 1; i++) {
        days.push({
            value: i,
            label: new Date(year, monthNum, i).getDate(),
        })
    }

    function runDay(index) {
        setDay(days[index].value)
        setDate(dateString)
        setIdDate(idDateString)
    }

    function runMonth(index) {
        setMonthNum(months[index].value)
        setDate(dateString)
        setIdDate(idDateString)
    }

    function runYear(index) {
        setYear(years[index].value)
        setDate(dateString)
        setIdDate(idDateString)
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
                    value={date}
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
                        setDate(dateString)
                        setIdDate(idDateString)
                    }}
                />
            </View>
            {picker && <>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <DynamicallySelectedPicker
                        items={days}
                        onScroll={({ index }) => runDay(index)}
                        onMomentumScrollBegin={({ index }) => runDay(index)}
                        onMomentumScrollEnd={({ index }) => runDay(index)}
                        onScrollBeginDrag={({ index }) => runDay(index)}
                        onScrollEndDrag={({ index }) => runDay(index)}
                        transparentItemRows={1}
                        initialSelectedIndex={CurrentDay - 1}
                        allItemsColor={Dark}
                        selectedItemBorderColor={Lightest}
                        height={128}
                        width={100}
                    />
                    <DynamicallySelectedPicker
                        items={months}
                        onScroll={({ index }) => runMonth(index)}
                        onMomentumScrollBegin={({ index }) => runMonth(index)}
                        onMomentumScrollEnd={({ index }) => runMonth(index)}
                        onScrollBeginDrag={({ index }) => runMonth(index)}
                        onScrollEndDrag={({ index }) => runMonth(index)}
                        transparentItemRows={1}
                        initialSelectedIndex={CurrentMonth}
                        allItemsColor={Dark}
                        selectedItemBorderColor={Lightest}
                        height={128}
                        width={100}
                    />
                    <DynamicallySelectedPicker
                        items={years}
                        onScroll={({ index }) => runYear(index)}
                        onMomentumScrollBegin={({ index }) => runYear(index)}
                        onMomentumScrollEnd={({ index }) => runYear(index)}
                        onScrollBeginDrag={({ index }) => runYear(index)}
                        onScrollEndDrag={({ index }) => runYear(index)}
                        transparentItemRows={1}
                        allItemsColor={Dark}
                        selectedItemBorderColor={Lightest}
                        height={128}
                        width={100}
                    />
                </View>
                {!setDefaultDate && <SelectButton
                    style={{ flex: 0 }}
                    label="Reset date"
                    selected={true}
                    onPress={() => {
                        setDate('')
                        setPicker(!picker)
                    }}
                />}
            </>}
        </>
    )
}