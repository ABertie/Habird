import { useState } from "react";
import { TextInput, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import SelectButton from "./SelectButton";
import { Dark, Light, Lightest, Mid } from "../colors";

export default function DatePicker({ date, setDate }) {
    const [picker, setPicker] = useState(false)

    return (
        <>
            <View style={{
                padding: 8,
                paddingHorizontal: 16,
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
                    style={{ flex: 0 }}
                    selected={true}
                    label='Select date'
                    onPress={() => setPicker(!picker)}
                />
            </View>
            {picker && <>
                <DateTimePicker
                    mode="single"
                    date={date}
                    onChange={(params) => setDate(params.date)}
                    timePicker={true}
                    calendarTextStyle={{
                        color: Dark,
                        fontWeight: '500',
                    }}
                    headerTextStyle={{
                        color: Dark,
                        fontWeight: '500',
                    }}
                    headerButtonColor={Dark}
                    weekdatesTextStyle={{
                        color: Dark,
                    }}
                    selectedTextStyle={{
                        color: Lightest,
                    }}
                    selectedItemColor={Mid}
                />
                <SelectButton
                    style={{ flex: 0 }}
                    label="Reset date"
                    selected={true}
                    onPress={() => setDate()}
                />
            </>}
        </>
    )
}