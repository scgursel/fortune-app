import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Navbar from './Navbar'

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    imageText: {
        fontFamily: "IslandMoments",
        textShadowColor: "#000",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 4,
    }
});
const FalKonusu = () => {

    return (
        <LinearGradient
            colors={['#1B1455', '#0E0A2C']}
            style={{ flex: 1 }}
        >
            <Navbar/>
            <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, paddingBottom: 20 }} className="px-5 pt-10" >
                    <Text
                        className="text-4xl text-center  text-[#D9D9D9]"
                        style={{ fontFamily: "IslandMoments" }}
                    >
                        Hangi Konuda Fal Bakırmak İstersiniz
                    </Text>
                    <View className='flex-1 items-center mt-20'>
                        <View className="flex-row justify-between px-2 w-full mb-4">
                            <Pressable onPress={() => console.log('Ask pressed')}
                                className="w-[48%] aspect-square relative">
                                <Image source={require('../../assets/images/love.png')}
                                    className="w-full h-full rounded-lg" />
                                <Text className="absolute w-full text-center text-[#D9D9D9] text-6xl bottom-2"
                                    style={style.imageText}>Aşk</Text>
                            </Pressable>
                            <Pressable onPress={() => console.log('Career pressed')}
                                className="w-[48%] aspect-square relative">
                                <Image source={require('../../assets/images/kariyer.png')}
                                    className="w-full h-full rounded-lg" />
                                <Text className="absolute w-full text-center text-[#D9D9D9] text-6xl bottom-2"
                                    style={style.imageText}>Kariyer</Text>
                            </Pressable>
                        </View>
                        <View className='flex-row justify-between px-2 w-full'>
                            <Pressable onPress={() => console.log("Healthy pressed")}
                                className="w-[48%] aspect-square relative">
                                <Image source={require('../../assets/images/3.png')}
                                    className='w-full h-full rounded-lg' />
                                <Text className='absolute w-full text-center text-[#D9D9D9] text-6xl bottom-2 '
                                    style={style.imageText}>Genel</Text>
                            </Pressable>
                            <Pressable onPress={() => console.log("Healthy pressed")}
                                className="w-[48%] aspect-square relative">
                                <Image source={require('../../assets/images/8.png')}
                                    className='w-full h-full rounded-lg' />
                                <Text className='absolute w-full text-center text-[#D9D9D9] text-6xl bottom-2'
                                    style={style.imageText}>Sağlık</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default FalKonusu