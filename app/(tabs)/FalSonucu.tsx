import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Navbar from './Navbar'
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  text: {
    fontFamily: "IslandMoments",
    color: "#D9D9D9"
  },
  falText: {
    fontFamily: "IslandMoments",
    color: "#D9D9D9"
  },
  falTextContainer: {
    backgroundColor: "#21186A",
    padding: 20
  }
})
const FalSonucu = () => {
  return (
    <LinearGradient
      colors={['#1B1455', '#0E0A2C']}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Navbar/>
        <View className='flex-1 justify-center mt-10' style={style.container}>
          <Text className='text-6xl items-start' style={style.text}>Falınız !</Text>
          <View className='items-center mt-5' style={style.falTextContainer}>
            <Text className=' text-4xl ' style={style.falText}>
              Gözlerinin derinliklerine bakarken, sanki geçmişin izlerini taşıyan bir yolculuğa çıkıyorsun.
              Şu an, hayatında önemli bir dönüm noktasındasın. Duygusal anlamda biraz huzursuz ve belirsiz
              hissediyorsun. Ama unutma, karanlık her zaman sabahı getirecektir. Bu dönem biraz zorlayıcı
              olsa da, seni bekleyen ışığa doğru ilerliyorsun. Gözlerinin derinliklerine bakarken,
              sanki geçmişin izlerini taşıyan bir yolculuğa çıkıyorsun.
              Şu an, hayatında önemli bir dönüm noktasındasın. Duygusal anlamda biraz huzursuz ve belirsiz
              hissediyorsun. Ama unutma, karanlık her zaman sabahı getirecektir. Bu dönem biraz zorlayıcı
              olsa da, seni bekleyen ışığa doğru ilerliyorsun.
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default FalSonucu