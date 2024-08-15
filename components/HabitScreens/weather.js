import { useEffect, useState } from "react";
import axios from "axios";

import { Dark, Mid } from "../colors";
import { Image, Text, View } from "react-native";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5"

const weather = {
    '01d': {
        src: require('../../assets/weather/01d.png'),
        width: 46,
    },
    '01n': {
        src: require('../../assets/weather/01n.png'),
        width: 48,
    },
    '02d': {
        src: require('../../assets/weather/02d.png'),
        width: 67,
    },
    '02n': {
        src: require('../../assets/weather/02n.png'),
        width: 68,
    },
    '03d': {
        src: require('../../assets/weather/03d.png'),
        width: 71,
    },
    '03n': {
        src: require('../../assets/weather/03n.png'),
        width: 71,
    },
    '04d': {
        src: require('../../assets/weather/04d.png'),
        width: 67,
    },
    '04n': {
        src: require('../../assets/weather/04n.png'),
        width: 68,
    },
    '09d': {
        src: require('../../assets/weather/09d.png'),
        width: 63,
    },
    '09n': {
        src: require('../../assets/weather/09n.png'),
        width: 63,
    },
    '10d': {
        src: require('../../assets/weather/10d.png'),
        width: 63,
    },
    '10n': {
        src: require('../../assets/weather/10n.png'),
        width: 63,
    },
    '11d': {
        src: require('../../assets/weather/11d.png'),
        width: 57,
    },
    '11n': {
        src: require('../../assets/weather/11n.png'),
        width: 57,
    },
    '13d': {
        src: require('../../assets/weather/13d.png'),
        width: 60,
    },
    '13n': {
        src: require('../../assets/weather/13n.png'),
        width: 60,
    },
    '50d': {
        src: require('../../assets/weather/50d.png'),
        width: 75,
    },
    '50n': {
        src: require('../../assets/weather/50n.png'),
        width: 75,
    },
}

export default function Weather() {
    const lat = '55.59960356249564'
    const lon = '12.20061405218572'
    const [response, setResponse] = useState({})

    const key = process.env.EXPO_PUBLIC_API_KEY

    useEffect(function () {
        async function getData() {
            try {
                // throw new Error("This in an error")
                const RESPONSE = await axios.get(`/weather?lat=${lat}&lon=${lon}&appid=${key}`)
                setResponse(RESPONSE.data)
            }
            catch {
                // console.log(error)
            }
        }
        getData()
    }, [])
    return (
        <>
            {response?.main && <View style={{
                position: "absolute",
                bottom: 0,
                zIndex: 1,
                backgroundColor: Mid,
                borderRadius: 8,
                padding: 8,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                }}>
                    <Image source={weather[response?.weather[0]?.icon].src} style={{
                        width: weather[response?.weather[0]?.icon].width,
                        height: 48,
                    }} />
                    <Text style={{
                        fontSize: 32,
                        color: Dark,
                    }}>{Math.round(response?.main?.temp - 273.15).toString()}&ordm;</Text>
                </View>
                <Text style={{
                    textTransform: 'capitalize',
                    color: Dark,
                    fontWeight: '600',
                }}>{response?.weather[0]?.description}</Text>
            </View>}
        </>
    )
}