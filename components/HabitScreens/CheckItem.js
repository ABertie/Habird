import Feather from '@expo/vector-icons/Feather';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Delete from './DeleteModal';
import { Brand, Dark, Darkest, Light, Mid } from '../colors';

export default function CheckItem({ i, done, setLoading }) {
    const [deleteModal, setDeleteModal] = useState(false)

    async function CheckHandler(i) {
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
        )
        i.IsDone = true
        try {
            await AsyncStorage.mergeItem(i.Name.split(" ").join("_"), JSON.stringify(i))
        } catch (e) {
        }
        setLoading(true)
    }

    return (
        <View style={{
            justifyContent: 'center',
            marginBottom: 8,
        }}>
            {!done && <Pressable
                onPress={() => CheckHandler(i)}
                style={[styles.buttonEffekt, {
                    paddingHorizontal: 8,
                    position: 'absolute',
                    backgroundColor: Brand,
                    zIndex: 1,
                    right: 4,
                    flexDirection: 'row',
                }]}>
                <Feather name="check-circle" size={32} color={Dark} />
            </Pressable>}
            <View
                style={[styles.buttonEffekt, done === true && { backgroundColor: Dark + 33 }]}>
                <Text style={StyleSheet.text}>
                    {i.Name}
                </Text>
                <Text style={{
                    color: Darkest + 55,
                }}>
                    {i.Reminder} {i.StartDate}
                </Text>
            </View>
            {done && <Pressable
                onPress={() => setDeleteModal(true)}
                style={[styles.buttonEffekt, {
                    paddingHorizontal: 8,
                    position: 'absolute',
                    right: 4,
                    backgroundColor: Mid,
                    zIndex: 1,
                }]}>
                <Feather name="trash" size={32} color={Dark} />
            </Pressable>}
            <Delete i={i} deleteModal={deleteModal} setDeleteModal={setDeleteModal} setLoading={setLoading} />
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: Dark,
        fontWeight: '500',
        fontSize: 16,
    },
    buttonEffekt: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: Light,
        borderRadius: 8,
    }
})