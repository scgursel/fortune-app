import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    appName: {
        color: "#FDA83B",
        fontFamily: "IslandMoments",
        fontSize:44,


    },
    profile: {
        backgroundColor: "#D9D9D9"
    }
})
const navbar = () => {
    return (
        <View className='flex-row justify-between items-center mt-2' style={style.container}>
            <Text className='flex-1 text-center' style={style.appName}>fallik</Text>
            <TouchableOpacity className='bg-gray-200 p-2 rounded-full' style={style.profile} onPress={() => { console.log("BY") }}>
                <Text>BY</Text>
            </TouchableOpacity>
        </View>
    )
}

export default navbar