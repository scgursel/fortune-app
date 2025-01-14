import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const StartScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/homescreen-son.png')}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 bg-black/30 justify-end pb-20">
        <View className="px-8">
          <Text className="text-white text-2xl italic mb-6 text-center font-['IslandMoments']">
            Bir fincan kahve, bir tutam merak, bir dokunuş yapay zeka!
          </Text>

          <TouchableOpacity
            className="w-full bg-[#1e1b4b] py-4 rounded-full items-center"
            onPress={() => router.push('/Login')}
          >
            <Text className="text-white text-xl font-['IslandMoments']">
              Devam Et
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default StartScreen