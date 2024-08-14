import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Modal, Text, View } from 'react-native';

import SelectButton from '../Inputs/SelectButton';
import { Dark, Light, Lightest } from '../colors';

export default function Delete({ i, deleteModal, setDeleteModal, getKeys }) {

    async function deleteHandler(i) {
        setDeleteModal(false)
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Warning
        )
        try {
            await AsyncStorage.removeItem(i.Name.split(" ").join("_"))
        } catch (e) {
        }
        getKeys()
    }

    return (
        <Modal
            visible={deleteModal}
            transparent={true}
        // onRequestClose={() => }
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <BlurView
                    style={{
                        flex: 1,
                        position: 'absolute',
                        right: 0,
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                    experimentalBlurMethod='dimezisBlurView'
                    intensity={10}
                    tint='dark'
                />
                <View style={{
                    backgroundColor: Lightest,
                    padding: 8,
                    justifyContent: 'space-around',
                    height: '25%',
                    width: '75%',
                    borderRadius: 8,
                    shadowColor: Dark,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: Dark,
                        fontSize: 20,
                    }}>Are you sure you want to delete?</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                        width: '100%',
                        backgroundColor: Light,
                        borderRadius: 8,
                    }}>
                        <SelectButton
                            label="Cancel"
                            onPress={() => setDeleteModal(false)}
                        />
                        <SelectButton
                            label="Delete"
                            selected
                            onPress={() => deleteHandler(i)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}